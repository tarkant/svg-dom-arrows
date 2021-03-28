import { Arrow } from './Arrow';
import './styles.scss';

const s = document.querySelector('.start');
const e = document.querySelector('.end');

new Arrow({
    start: {
        element: s,
    },
    end: {
        element: e,
    }
});

