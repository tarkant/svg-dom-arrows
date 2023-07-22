import { SquarePath, LinePath, CurvyPath, ArcPath, Path } from '../src';

import { SVGNS } from '../src';
import './styles.scss';

const cases = ['case-1', 'case-2', 'case-3', 'case-4', 'case-5', 'case-6', 'case-7', 'case-8', 'case-9', 'case-10', 'case-11', 'case-12'];

const createMarker = (): SVGMarkerElement => {
  const arrow = document.createElementNS(SVGNS, 'path');
  const marker = document.createElementNS(SVGNS, 'marker');

  arrow.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
  arrow.setAttribute('style', 'fill:white;stroke-width:0.801524;stroke-miterlimit:4;stroke-dasharray:none');

  marker.setAttribute('id', 'marker1');
  marker.setAttribute('refX', '5');
  marker.setAttribute('refY', '5');
  marker.setAttribute('viewBox', '0 0 10 10');
  marker.setAttribute('orient', 'auto-start-reverse');
  marker.setAttribute('markerWidth', '6');
  marker.setAttribute('markerHeight', '6');
  marker.appendChild(arrow);

  return marker;
};

const arrows: Path[] = [];

cases.map((item, idx) => {
  const s = document.querySelector(`.${item} .start`);
  const e = document.querySelector(`.${item} .end`);

  arrows.push(
    new LinePath(
      {
        start: {
          element: s,
          position: {
            top: 0.5,
            left: 1,
          },
          markerId: '#marker1',
        },
        end: {
          element: e,
          position: {
            top: 0.5,
            left: 0,
          },
          markerId: '#marker1',
        },
        style: 'stroke:white;stroke-width:4;fill:transparent',
        appendTo: document.body,
        markers: [createMarker()],
        customClass: {
          container: `container-${idx} foo bar`,
          svgPath: `path-${idx} baz`,
          svgElement: `element-${idx}`,
        },
      },
      false,
    ),
  );
});

console.log(arrows);

/**
 * Example to recalclate paths on every window.onresize event
 */
window.onresize = () => arrows.map((el) => el.recalculate());
