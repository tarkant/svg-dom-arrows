import { Arrow } from './Arrow';
import './styles.scss';

const s = document.querySelector('.start');
const e = document.querySelector('.end');

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
      top: 100,
      right: 100,
    },
  },
  appendTo: document,
}, true);
