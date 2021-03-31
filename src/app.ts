import { Arrow } from './Arrow';
import './styles.scss';

const s = document.querySelector('.start');
const e = document.querySelector('.end');

new Arrow({
  start: {
    element: s,
    position: {
      top: 50,
      right: 50,
    },
  },
  end: {
    element: e,
  },
});
