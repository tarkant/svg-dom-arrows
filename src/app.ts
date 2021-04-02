import { Arrow } from './Arrow';
import './styles.scss';

const cases = ['case-1', 'case-2', 'case-3', 'case-4', 'case-5', 'case-6' ];

cases.map((item) => {
  const s = document.querySelector(`.${item} .start`);
  const e = document.querySelector(`.${item} .end`);

  new Arrow({
    start: {
      element: s,
      position: {
        top: 100,
        right: 100,
      },
    },
    end: {
      element: e,
      position: {
        top: 0,
        right: 0,
      },
    },
    appendTo: document,
  }, true);
});
