import { LinePath } from './LinePath';
import { CurvyPath } from './CurvyPath';
import { ArcPath } from './ArcPath';
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
];

cases.map((item) => {
  const s = document.querySelector(`.${item} .start`);
  const e = document.querySelector(`.${item} .end`);

  new ArcPath({
    start: {
      element: s,
      position: {
        top: 1,
        left: 1,
      },
    },
    end: {
      element: e,
      position: {
        top: 0,
        left: 0,
      },
    },
    appendTo: document.body,
  }, true);
});
