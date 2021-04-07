import { SVGNS } from './consts/Constants';
import { ArrowOptions, ArrowPosition } from './models/ArrowOptions';

export class Arrow {

  /**
   * The main SVG element. You can reuse it if needed.
   */
  public svgPath: SVGSVGElement;

  /**
   * The path line drawn in the SVG, this will be appended automatically to `svgPath`.
   */
  public svgPathLine: SVGPathElement;

  constructor(options: ArrowOptions, debug = false) {
    const startBbox = options.start.element.getBoundingClientRect();
    const endBbox = options.end.element.getBoundingClientRect();

    this.svgPath = document.createElementNS(SVGNS, 'svg');
    this.svgPathLine = document.createElementNS(SVGNS, 'path');

    if (options.appendTo) {
      document.body.appendChild(this.svgPath);
    }

    this.svgPath.appendChild(this.svgPathLine);

    // M Y1,Y2 X1,X2  for a simple line
    this.svgPathLine.setAttribute('d', this.getPath(startBbox, endBbox, options));

    // M Yp1,Yp2 C Xc1,Yc1 Xc2,Yc2 Xp1,Xp2
    // svgpathline.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} C 0,${height / 2} ${width / 2},${height} ${width - offsetX},${height - offsetY}`);

    this.setSvgSize(startBbox, endBbox, options);

    this.svgPath.style.position = 'absolute';
    this.svgPath.style.overflow = 'visible';

    if (debug) {
      this.svgPath.style.background = 'rgba(128,0,0,.2)';
    }

    this.svgPathLine.setAttribute('style', 'stroke:white;stroke-width:4;fill:transparent');

    this.setSvgStyle(startBbox, endBbox, options);
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

    const width = Math.abs(
      endBbox.left
      - startBbox.left
    );
    const height = Math.abs(
      endBbox.top
      - startBbox.top
    );

    return {
      // Width of the svg - the starting position offset * the size + the ending position offset * size
      width: width - ((startPos.right / 100) * startBbox.width) + ((endPos.right / 100) * endBbox.width),
      height: height - ((startPos.top / 100) * startBbox.height) + ((endPos.top / 100) * endBbox.height),
    };
  }

  setSvgStyle(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions) {
    const offsetX = startBbox.left > endBbox.left ? startBbox.left - endBbox.left : 0;
    const offsetY = startBbox.top > endBbox.top ? startBbox.top - endBbox.top : 0;

    // If position is undefined, set the values to 0 for top and right
    const startPos = options.start.position ? options.start.position : { top: 0, right: 0 };
    const endPos = options.end.position ? options.end.position : { top: 0, right: 0 };

    // TODO: this is supposed to take some condition but I can't figure it out
    const offsetXP = startBbox.width > endBbox.width ? -((startPos.right / 100) / startBbox.width) : ((endPos.right / 100) / endBbox.width);
    const offsetYP = startBbox.height > endBbox.height ? -((startPos.top / 100) / startBbox.height) : ((endPos.top / 100) / endBbox.height);

    this.svgPath.style.left = `${(startBbox.left - offsetX) + ((startPos.right / 100) * startBbox.width)}px`;
    this.svgPath.style.top = `${(startBbox.top - offsetY) + ((startPos.top / 100) * startBbox.height)}px`;
  }

  setSvgSize(endBbox: DOMRect, startBbox: DOMRect, options: ArrowOptions) {
    const { width, height } = this.getSVGProportions(startBbox, endBbox, options);

    this.svgPath.setAttribute('width', `${width}`);
    this.svgPath.setAttribute('height', `${height}`);
  }
}
