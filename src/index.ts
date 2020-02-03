import { ends } from './arrow/ends';
import { path } from './arrow/path';

const arrowCreate = ({
  className = 'arrow', from, to, shapeApparence,
}) => {

  /**
   * @param {String} HTML representing any number of sibling elements
   * @return {NodeList} 
   */
  function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
  }

  console.warn(from)
  const arrow = path(ends(from), ends(to), shapeApparence);

  const node = htmlToElements(`<svg class="${className}"
    style="top: ${arrow.offset.y}px; left: ${arrow.offset.x}px; position: absolute"
    width=${arrow.size.width} height="${arrow.size.height}">
      <defs
        id="defs2">
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="12" markerHeight="12"
            orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <path class="${className}__path" d="${arrow.points}" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
    </svg>`)[0];

  /* const watcher = observer(from, to);
  watcher.observe(() => {
    const nextArrow = path(ends(from), ends(to), shapeApparence);
    ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.top = `${nextArrow.offset.y}px`;
    ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.left = `${nextArrow.offset.x}px`;
    ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.width = `${nextArrow.size.width}px`;
    ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.height = `${nextArrow.size.height}px`;

    ((node as SVGAElement).querySelector(`.${className}__path`) as SVGAElement).setAttribute('d', nextArrow.points);

  }); */

  return {
    node,
    timer: 0,
  };
};

if (window){ 
  (window as any).arrowCreate = arrowCreate;
}

export default arrowCreate;
export { DIRECTION, SHAPES } from './consts';
