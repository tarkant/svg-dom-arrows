import { SVGNS } from './consts/Constants';
import { ArrowOptions, ArrowPosition } from './models/ArrowOptions';

export class Arrow {

  /**
   * The main SVG element. You can reuse it if needed.
   */
  public svgElement: SVGSVGElement;

  /**
   * The path line drawn in the SVG, this will be appended automatically to `svgPath`.
   */
  public svgPathLine: SVGPathElement;

  private containerDiv: HTMLDivElement;

  constructor(options: ArrowOptions, debug = false) {
    const startBbox = options.start.element.getBoundingClientRect();
    const endBbox = options.end.element.getBoundingClientRect();

    this.containerDiv = document.createElement('div');
    this.svgElement = document.createElementNS(SVGNS, 'svg');
    this.svgPathLine = document.createElementNS(SVGNS, 'path');

    if (options.appendTo) {
      options.appendTo.appendChild(this.containerDiv);
    }

    this.containerDiv.appendChild(this.svgElement);
    this.svgElement.appendChild(this.svgPathLine);

    // M Y1,Y2 X1,X2  for a simple line
    this.svgPathLine.setAttribute('d', this.getPath(endBbox, startBbox, options));

    // M Yp1,Yp2 C Xc1,Yc1 Xc2,Yc2 Xp1,Xp2
    // svgpathline.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} C 0,${height / 2} ${width / 2},${height} ${width - offsetX},${height - offsetY}`);

    this.setSvgSize(endBbox, startBbox, options);
    this.setDivSize(endBbox, startBbox, options);

    this.svgElement.style.position = 'absolute';
    this.svgElement.style.overflow = 'visible';

    if (debug) {
      this.svgElement.style.background = 'rgba(128,0,0,.2)';
    }

    this.svgPathLine.setAttribute('style', 'stroke:white;stroke-width:4;fill:transparent');

    this.setSvgStyle(endBbox, startBbox, options);
  }

  /**
   * Returns an SVG path (or what's supposed to be in attribute `d`)
   * You can extend this function and add your own logic to draw whatever path you'd like.
   * @param endBbox bbox of the end dom element
   * @param startBbox bbox of the start dom element
   * @returns path string
   */
  getPath(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions): string {
    const { width, height } = this.getSVGProportions(endBbox, startBbox, options);

    // If position is undefined, set the values to 0 for top and right
    const startPos = options.start.position ? options.start.position : { top: 0, right: 0 };
    const endPos = options.end.position ? options.end.position : { top: 0, right: 0 };

    const offsetX = (startBbox.left + (startBbox.width * (startPos.right / 100))) > (endBbox.left + (endBbox.width * (endPos.right / 100))) ? startBbox.left - endBbox.left - (endBbox.width * (endPos.right / 100)) : 0;
    const offsetY = (startBbox.top + (startBbox.height * (startPos.top / 100))) > (endBbox.top + (endBbox.height * (endPos.top / 100))) ? startBbox.top - endBbox.top - (endBbox.height * (endPos.top / 100)) : 0;

    return `M ${0 + offsetX},${0 + offsetY} ${width - offsetX},${height - offsetY}`;
  }

  getSVGProportions(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions): { width: number; height: number } {

    // If position is undefined, set the values to 0 for top and right
    const startPos = options.start.position ? options.start.position : { top: 0, right: 0 };
    const endPos = options.end.position ? options.end.position : { top: 0, right: 0 };

    const width = startBbox.left > endBbox.left ? Math.abs(
      endBbox.left
      - startBbox.right
    ): Math.abs(
      endBbox.right
      - startBbox.left
    );

    const height = startBbox.top > endBbox.top ? Math.abs(
      endBbox.top
      - startBbox.bottom
    ) : Math.abs(
      endBbox.bottom
      - startBbox.top
    );

    // If the starting point is > to the ending point, negate the values
    const offsetX = startBbox.left > endBbox.left ? -1 : 1;
    const offsetY = startBbox.top > endBbox.top ? -1: 1;

    // If the starting point is > to the ending point componsate with 100 as the x y is reversed
    const componsateX = startBbox.left > endBbox.left ? -100 : 0;
    const componsateY = startBbox.top > endBbox.top ? -100: 0;

    const correctWidth = (startPos.right * startBbox.width / 100) + offsetX * ((endPos.right + componsateX) * endBbox.width / 100);
    const correctHeight = (startPos.top * startBbox.height / 100) + offsetY * ((endPos.top + componsateY) * endBbox.height / 100);

    return {
      // Width of the svg - the starting position offset * the size + the ending position offset * size
      width: width - correctWidth,
      height: height - correctHeight,
    };
  }

  setSvgStyle(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions) {
    // If position is undefined, set the values to 0 for top and right
    const startPos = options.start.position ? options.start.position : { top: 0, right: 0 };
    const endPos = options.end.position ? options.end.position : { top: 0, right: 0 };

    const startPoint = {
      top: startBbox.top - (startBbox.height * startPos.top / 100),
      left: startBbox.left - (startBbox.width * startPos.right / 100),
    };

    const endPoint = {
      top: endBbox.top - (endBbox.height * endPos.top / 100),
      left: endBbox.left - (endBbox.width * endPos.right / 100),
    };

    const top = startPoint.top < endPoint.top ?
      (startPos.top / 100) * startBbox.height : (endPos.top / 100) * endBbox.height ;

    const left = startPoint.left < endPoint.left ?
      (startPos.right / 100) * startBbox.width : (endPos.right / 100) * endBbox.width ;

    const componsateX = startBbox.left > endBbox.left && startBbox.top > endBbox.top ? -(endPos.top / 100) * endBbox.height : -(startPos.top / 100) * startBbox.height;
    const componsateY = startBbox.left > endBbox.left && startBbox.top > endBbox.top ? -(endPos.right / 100) * endBbox.width : -(startPos.right / 100) * startBbox.width;

    this.svgElement.style.top = `${top + componsateX}px`;
    this.svgElement.style.left = `${left + componsateY}px`;
  }

  setSvgSize(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions) {
    const { width, height } = this.getSVGProportions(endBbox, startBbox, options);

    this.svgElement.setAttribute('width', `${width}`);
    this.svgElement.setAttribute('height', `${height}`);
  }

  setDivSize(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions) {
    const width = startBbox.left > endBbox.left ? Math.abs(
      endBbox.left
      - startBbox.right
    ): Math.abs(
      endBbox.right
      - startBbox.left
    );

    const height = startBbox.top > endBbox.top ? Math.abs(
      endBbox.top
      - startBbox.bottom
    ) : Math.abs(
      endBbox.bottom
      - startBbox.top
    );

    const top = startBbox.top > endBbox.top ? endBbox.top : startBbox.top;
    const left = startBbox.left > endBbox.left ? endBbox.left : startBbox.left;

    this.containerDiv.classList.add('debug');
    this.containerDiv.style.position = 'absolute';

    this.containerDiv.style.width = `${width}px`;
    this.containerDiv.style.height = `${height}px`;

    this.containerDiv.style.top = `${top}px`;
    this.containerDiv.style.left = `${left}px`;
  }
}
