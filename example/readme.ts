import './styles.scss';
import { CurvyPath, Path } from '../src';
import { PathOptions } from '@src/models';

/**
 * Another example to show the versatility of the arrows, in this case,
 * We create several elements that we place randomly in the document.
 * The items are then draggable by mouse and will toggle an arrow redraw.
 */

const mainBox = document.querySelector('.main-box') as HTMLDivElement;

mainBox.style.top = `${window.innerHeight / 2}px`;
mainBox.style.left = `${window.innerWidth / 2}px`;

const features = document.querySelectorAll('[class*=box-]') as NodeListOf<HTMLDivElement>;

const arrows: Path[] = [];

features.forEach((item) => {
  item.style.position = 'absolute';
  item.style.top = `${(window.innerHeight * Math.random()) *.7}px`;
  item.style.left = `${(window.innerWidth * Math.random()) *.7}px`;

  const options: PathOptions = {
    start: {
      element: item,
      position: {
        top: 0.5,
        left: 0.5,
      },
      markerId: '#marker1',
    },
    end: {
      element: mainBox,
      position: {
        top: 0.5,
        left: 0.5,
      },
      markerId: '#marker1',
    },
    style: 'stroke:white;stroke-width:4;fill:transparent',
    appendTo: document.body,
  };

  arrows.push(
    new CurvyPath(
      options,
    ),
  );
});

/**
 * Moves the draggable element to the new cursor position.
 * Code slightly adapted from :
 * https://www.w3schools.com/howto/howto_js_draggable.asp
 *
 * @param {HTMLElement} element - The draggable element.
 * @param {CurvyPath} item - The CurvyPath object.
 * @return {void}
 */
const dragElement = (element: HTMLElement, item: CurvyPath): void => {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  const dragMouseDown = (e: MouseEvent): void => {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  const elementDrag = (e: MouseEvent): void => {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = `${(element.offsetTop - pos2)}px`;
    element.style.left = `${(element.offsetLeft - pos1)}px`;
    item.redraw();
  }

  const closeDragElement = (): void => {
    /**
     * stop moving when mouse button is released and clear the event listeners
     */
    document.onmouseup = null;
    document.onmousemove = null;
  }

  element.onmousedown = dragMouseDown;
}


arrows.forEach(el => {
  dragElement(el.options.start.element as HTMLElement, el);
})


window.onresize = () => arrows.forEach((el) => el.redraw());
