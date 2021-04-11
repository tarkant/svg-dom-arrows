import { SVGNS } from './consts/Constants';
import { ArrowOptions, ArrowPosition } from './models/ArrowOptions';
import { Point } from './models/Path';
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
  private startBbox: DOMRect;
  private endBbox: DOMRect;
  private options: ArrowOptions;

  constructor(options: ArrowOptions, debug = false) {
    this.options = options;
    this.startBbox = this.options.start.element.getBoundingClientRect();
    this.endBbox = this.options.end.element.getBoundingClientRect();

    if(!options.start.position) {this.options.start.position = {top: 0, left: 0};}
    if(!options.end.position) {this.options.end.position = {top: 0, left: 0};}
    this.options.start.position.offsetX = this.options.start.position.left * this.startBbox.width;
    this.options.start.position.offsetY = this.options.start.position.top * this.startBbox.height;
    this.options.end.position.offsetX = this.options.end.position.left * this.endBbox.width;
    this.options.end.position.offsetY = this.options.end.position.top * this.endBbox.height;

    if(options.svgPath) {
      this.svgPath = options.svgPath;
    }

    if(!this.options.manualRender) {
      this.render(debug);
    }
  }

  render(debug = false) {
    this.containerDiv = document.createElement('div');
    this.svgElement = document.createElementNS(SVGNS, 'svg');
    this.svgPathLine = document.createElementNS(SVGNS, 'path');

    if (this.options.appendTo) {
      this.options.appendTo.appendChild(this.containerDiv);
    }

    this.containerDiv.appendChild(this.svgElement);
    this.svgElement.appendChild(this.svgPathLine);
    this.setDivAttrs();
    this.setSvgAttrs();

    this.svgPathLine.setAttribute('d', this.getPath());

    if (debug) {
      this.svgElement.style.background = 'rgba(128,0,0,.2)';
      this.containerDiv.classList.add('debug');
    }

    this.svgPathLine.setAttribute('style', 'stroke:white;stroke-width:4;fill:transparent');
  }

  release() {
    this.containerDiv.remove();
  }

  /**
   * Returns an SVG path (or what's supposed to be in attribute `d`)
   * You can extend this function and add your own logic to draw whatever path you'd like.
   * @param endBbox bbox of the end dom element
   * @param startBbox bbox of the start dom element
   * @returns path string
   */
  getPath(): string {
    const { width, height, start, end } = this.getSVGProportions();

    const startX = start.x > end.x ? width: 0;
    const startY = start.y > end.y ? height : 0;
    const endX = width - startX;
    const endY = height - startY;

    const points = [
      {x: startX, y: startY},

      ...(
        width > height
          ? [
            {x:startX, y: Math.abs(startY - (startY + endY)*.5)},
            {x:Math.abs(startX - (startX + endX)*.5), y: Math.abs(startY - (startY + endY)*.5)}, // center
            {x:endX, y: Math.abs(startY - (startY + endY)*.5)}
          ]
          : [
            {x:Math.abs(startX - (startX + endX)*.5), y: startY},
            {x:Math.abs(startX - (startX + endX)*.5), y: Math.abs(startY - (startY + endY)*.5)}, // center
            {x:Math.abs(startX - (startX + endX)*.5), y:endY}
          ]
      ),

      {x: endX, y: endY}
    ];

    return this.svgPath(points);
  }

  svgPath(points: Point[]): string {
    return `
    M ${points[0].x},${points[0].y} 
    C ${points[1].x},${points[1].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y}
    C ${points[3].x},${points[3].y} ${points[3].x},${points[3].y} ${points[4].x},${points[4].y}
    `;
  };

  setSvgAttrs() {
    const { start, end, top, left, width, height } = this.getSVGProportions();

    this.svgElement.style.top = `${top}px`;
    this.svgElement.style.left = `${left}px`;
    this.svgElement.style.position = 'absolute';
    this.svgElement.style.overflow = 'visible';
    this.svgElement.setAttribute('width', `${width}`);
    this.svgElement.setAttribute('height', `${height}`);
  }

  setDivAttrs() {
    const width = Math.abs(
      Math.min(this.startBbox.left, this.endBbox.left)
      - Math.max(this.endBbox.right, this.startBbox.right)
    );

    const height = Math.abs(
      Math.min(this.startBbox.top, this.endBbox.top)
      - Math.max(this.endBbox.bottom, this.startBbox.bottom)
    );

    const top = Math.min(this.startBbox.top, this.endBbox.top);
    const left = Math.min(this.startBbox.left, this.endBbox.left);

    this.containerDiv.style.position = 'absolute';

    this.containerDiv.style.width = `${width}px`;
    this.containerDiv.style.height = `${height}px`;

    this.containerDiv.style.top = `${top}px`;
    this.containerDiv.style.left = `${left}px`;
  }

  getSVGProportions() {
    const y1 = this.startBbox.top + this.options.start.position.offsetY;
    const y2 = this.endBbox.top + this.options.end.position.offsetY;

    const x1 = this.startBbox.left + this.options.start.position.offsetX;
    const x2 = this.endBbox.left + this.options.end.position.offsetX;

    return {
      // Width of the svg - the starting position offset * the size + the ending position offset * size
      width: Math.abs(x1 - x2),
      height: Math.abs(y1 - y2),
      start: {
        x: x1,
        y: y1
      },
      end: {
        x: x2,
        y: y2
      },
      top: y1 < y2 ? this.options.start.position.offsetY : this.options.end.position.offsetY,
      left: x1 < x2 ? this.options.start.position.offsetX : this.options.end.position.offsetX
    };
  }
}
