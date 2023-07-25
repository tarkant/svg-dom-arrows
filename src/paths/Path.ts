import { SvgProportions } from '@src/models/SvgProportions';
import { SVGNS } from '@src/consts';
import { PathOptions, Point, RenderOutput } from '@src/models';

export abstract class Path {
  /**
   * The main SVG element. You can reuse it if needed.
   */
  protected svgElement: SVGSVGElement;

  /**
   * The path line drawn in the SVG, this will be appended automatically to `svgPath`.
   */
  protected svgPathLine: SVGPathElement;

  /**
   * The div that will contain the svg, this is positionned in absolute relatively to the
   * DOM element `appendTo`,
   * This helps us position the SVG inside the div in absolute too.
   */
  protected containerDiv: HTMLDivElement;

  /**
   * The SVG's defs can contain gradient stops, markers and other stuff. In this case,
   * we'll keep our marker(s)
   * appended to those defs. This lets the developer add his own defs if needed for
   * example.
   */
  protected defs: SVGDefsElement;

  /**
   * The starting element BBox that we get from `getBoundingClientRect()`. This is used
   * to do the calculations
   * needed to draw our path.
   */
  protected startBbox: DOMRect;

  /**
   * The ending element BBox that we get from `getBoundingClientRect()`. This is used to
   * do the calculations
   * needed to draw our path.
   */
  protected endBbox: DOMRect;

  /**
   * The PathOptions supplied to our class when creating a new instance are stored here.
   */
  protected options: PathOptions;

  constructor(options: PathOptions) {
    this.options = Object.assign(options);
    this.startBbox = this.options.start.element.getBoundingClientRect();
    this.endBbox = this.options.end.element.getBoundingClientRect();

    // Default to 0,0 if no position is specified
    if (!options.start.position) {
      this.options.start.position = { top: 0, left: 0 };
    }
    if (!options.end.position) {
      this.options.end.position = { top: 0, left: 0 };
    }

    /**
     * Offsets play a big role in knowing from where the path will effectivley start and
     * end,
     * To make things easier for other classes extending this base, we calculate all this
     * to reduce complexity.
     */
    this.options.start.position.offsetX =
      this.options.start.position.left * this.startBbox.width;
    this.options.start.position.offsetY =
      this.options.start.position.top * this.startBbox.height;
    this.options.end.position.offsetX =
      this.options.end.position.left * this.endBbox.width;
    this.options.end.position.offsetY =
      this.options.end.position.top * this.endBbox.height;

    if (options.svgPath) {
      this.svgPath = options.svgPath;
    }

    /**
     * Manual rendering might be useful for some cases.
     */
    if (!this.options.manualRender) {
      this.render();
    }
  }

  /**
   * If you want your path to adapt to the DOM changes,
   * you'll have to call this function, it will recalculate
   * the path and reappend it if needed.
   * @returns: RenderOutput; Calling this will return the new rendered container,
   * svg, path and defs.
   * It might be useful for you to avoid dealing with async stuff for example.
   */
  public render(): RenderOutput {
    this.containerDiv = document.createElement('div');
    this.svgElement = document.createElementNS(SVGNS, 'svg');
    this.svgPathLine = document.createElementNS(SVGNS, 'path');

    if (this.options.customClass) {
      this.setCustomClass();
    }

    if (this.options.appendTo) {
      this.options.appendTo.appendChild(this.containerDiv);
    }

    if (this.options.markers) {
      this.setPathMarkers();
    }

    this.containerDiv.appendChild(this.svgElement);
    this.svgElement.appendChild(this.svgPathLine);
    this.setDivAttrs();
    this.setSvgAttrs();

    this.svgPathLine.setAttribute('d', this.getPath());

    if (this.options.debug) {
      this.svgElement.style.background = 'rgba(128,0,0,.2)';
      this.containerDiv.classList.add('debug');
      this.containerDiv.style.background = 'rgba(128,128,0,.2)';
    }

    this.svgPathLine.setAttribute('style', this.options.style);

    return {
      container: this.containerDiv,
      svg: this.svgElement,
      path: this.svgPathLine,
      defs: this.defs,
    };
  }

  /**
   * Recalculates the positions of the div container, the svg element and the svg path
   */
  public recalculate(): void {
    this.startBbox = this.options.start.element.getBoundingClientRect();
    this.endBbox = this.options.end.element.getBoundingClientRect();

    /**
     * Offsets play a big role in knowing from where the path will effectivley start and
     * end,
     * To make things easier for other classes extending this base, we calculate all this
     * to reduce complexity.
     */
    this.options.start.position.offsetX =
      this.options.start.position.left * this.startBbox.width;
    this.options.start.position.offsetY =
      this.options.start.position.top * this.startBbox.height;
    this.options.end.position.offsetX =
      this.options.end.position.left * this.endBbox.width;
    this.options.end.position.offsetY =
      this.options.end.position.top * this.endBbox.height;

    this.svgPathLine.setAttribute('d', this.getPath());
    this.setDivAttrs();
    this.setSvgAttrs();
  }

  /**
   * Removes the div container and anything appended to it
   */
  public release(): void {
    this.containerDiv.remove();
  }

  /**
   * Adds the paths markers to the defs and adds them to the SVG path
   */
  setPathMarkers(): void {
    if (this.options.markers.length > 0) {
      this.defs = document.createElementNS(SVGNS, 'defs');

      this.options.markers.forEach((marker) => {
        this.defs.setAttribute('id', 'defs1');
        this.defs.appendChild(marker);
      });

      this.svgElement.appendChild(this.defs);
      if (this.options.start.markerId) {
        this.svgPathLine.setAttribute(
          'marker-start',
          `url(${this.options.start.markerId})`,
        );
      }
      if (this.options.end.markerId) {
        this.svgPathLine.setAttribute('marker-end', `url(${this.options.end.markerId})`);
      }
    }
  }

  /**
   * Set the svg attributes for the positioning and width/height
   */
  setSvgAttrs(): void {
    const { top, left, width, height } = this.getSVGProportions();

    this.svgElement.style.top = `${top}px`;
    this.svgElement.style.left = `${left}px`;
    this.svgElement.style.position = 'absolute';
    this.svgElement.style.overflow = 'visible';
    this.svgElement.setAttribute('width', `${width}`);
    this.svgElement.setAttribute('height', `${height}`);
  }

  /**
   * Sets the div attributes for the positioning and width/height
   */
  setDivAttrs(): void {
    const width = Math.abs(
      Math.min(this.startBbox.left, this.endBbox.left) -
        Math.max(this.endBbox.right, this.startBbox.right),
    );

    const height = Math.abs(
      Math.min(this.startBbox.top, this.endBbox.top) -
        Math.max(this.endBbox.bottom, this.startBbox.bottom),
    );

    const top = Math.min(this.startBbox.top, this.endBbox.top);
    const left = Math.min(this.startBbox.left, this.endBbox.left);

    this.containerDiv.style.position = 'absolute';

    this.containerDiv.style.width = `${width}px`;
    this.containerDiv.style.height = `${height}px`;

    // Take into account the appendTo element's offset for correct positioning
    if (this.options.appendTo && this.options.appendTo !== document.body) {
      const offsetYAppended = this.options.appendTo.getBoundingClientRect().y;
      const offsetXAppended = this.options.appendTo.getBoundingClientRect().x;
      this.containerDiv.style.top = `${top - offsetYAppended}px`;
      this.containerDiv.style.left = `${left - offsetXAppended}px`;
    } else {
      // Take into account the window.page(X|Y)Offset to avoid weird scroll issues
      this.containerDiv.style.top = `${top + window.pageYOffset}px`;
      this.containerDiv.style.left = `${left + window.pageXOffset}px`;
    }
  }

  /**
   * Calculates the SVG width, height, and other key numbers that can then be used to
   * draw the path
   * @returns
   */
  getSVGProportions(): SvgProportions {
    const y1 = this.startBbox.top + this.options.start.position.offsetY;
    const y2 = this.endBbox.top + this.options.end.position.offsetY;

    const x1 = this.startBbox.left + this.options.start.position.offsetX;
    const x2 = this.endBbox.left + this.options.end.position.offsetX;

    return {
      // Width of the svg - the starting position offset * the size + the ending position
      // offset * size
      width: Math.abs(x1 - x2) + 1,
      height: Math.abs(y1 - y2) + 1,
      start: {
        x: x1,
        y: y1,
      },
      end: {
        x: x2,
        y: y2,
      },
      top:
        y1 < y2 ? this.options.start.position.offsetY : this.options.end.position.offsetY,
      left:
        x1 < x2 ? this.options.start.position.offsetX : this.options.end.position.offsetX,
    };
  }

  /**
   * Set custom CSS classes according to the dev's options
   * use `classList.add()` to simply add the classes if necessary
   * Assuming the user will enter the class list separated with white spaces, things will
   * go smoothly.
   */
  setCustomClass(): void {
    const { container, svgElement, svgPath } = this.options.customClass;
    container && this.containerDiv.classList.add(...container.split(' '));
    svgElement && this.svgElement.classList.add(...svgElement.split(' '));
    svgPath && this.svgPathLine.classList.add(...svgPath.split(' '));
  }

  /**
   * Returns an SVG path (or what's supposed to be in attribute `d`)
   * You can extend this function and add your own logic to draw whatever path you'd like.
   * @param endBbox bbox of the end dom element
   * @param startBbox bbox of the start dom element
   * @returns path string
   */
  abstract getPath(): string;

  /**
   * This function is supposed to take points as input and output them as a string that
   * will be set to the `d` attribute of `<path>`.
   * @param points: Point[]; Array of points that you want to write to your SVG
   * @returns The path string ready to be added to the `d` attribute.
   */
  abstract svgPath(points: Point[]): string;
}
