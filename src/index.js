import Element from './jsx/element';
import ends from './arrow/ends';
import path from './arrow/path';
import observer from './observer/observer';

const arrowCreate = ({
  className = 'arrow', from, to, shapeApparence,
}) => {
  const arrow = path(ends(from), ends(to), shapeApparence);

  const arrowRef = Element.createRef();
  const pathRef = Element.createRef();
  const headRef = Element.createRef();

  const node = (
    <svg ref={arrowRef} className={className} style={{
      top: arrow.offset.y, left: arrow.offset.x, position: 'absolute',
    }} width={arrow.size.width} height={arrow.size.height}>
      <defs
        id="defs2">
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="12" markerHeight="12"
            orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <path ref={pathRef} className={`${className}__path`} d={arrow.points} marker-end="url(#arrow)" marker-start="url(#arrow)"/>
    </svg>
  );

  const watcher = observer(from, to);
  watcher.observe(() => {
    const nextArrow = path(ends(from), ends(to), shapeApparence);
    arrowRef.current.style.top = `${nextArrow.offset.y}px`;
    arrowRef.current.style.left = `${nextArrow.offset.x}px`;
    arrowRef.current.style.width = `${nextArrow.size.width}px`;
    arrowRef.current.style.height = `${nextArrow.size.height}px`;

    pathRef.current.setAttribute('d', nextArrow.points);

    headRef.current.setAttribute('transform', `rotate(${(nextArrow.head.degree)}, ${nextArrow.head.x}, ${nextArrow.head.y})`);

    headRef.current.setAttribute('x', `${nextArrow.head.x - 10}px`);
    headRef.current.setAttribute('y', `${nextArrow.head.y - 10}px`);
  });

  return {
    node,
    timer: watcher.timer,
  };
};

if (window) window.arrowCreate = arrowCreate;

export default arrowCreate;
export { DIRECTION, SHAPES } from './consts';
