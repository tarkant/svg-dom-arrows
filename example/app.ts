import { LinePath, Path } from '../src';

import { createMarker } from './CreateMarker';
import './styles.scss';

const cases = [
  'case-1',
  'case-2',
  'case-3',
  'case-4',
  'case-5',
  'case-6',
  'case-7',
  'case-8',
  'case-9',
  'case-10',
  'case-11',
  'case-12',
];

const arrows: Path[] = [];

cases.map((item, idx) => {
  const s = document.querySelector(`.${item} .start`);
  const e = document.querySelector(`.${item} .end`);

  arrows.push(
    new LinePath({
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
    }),
  );
});

console.log(arrows);

/**
 * Example to redraw paths on every window.onresize event
 */
window.onresize = () => arrows.forEach((el) => el.redraw());
