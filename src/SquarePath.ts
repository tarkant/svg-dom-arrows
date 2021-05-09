import { LinePath } from './LinePath';
import { PathOptions } from './models/PathOptions';
import { Point } from './models/Path';

export class SquarePath extends LinePath {

  constructor(options: PathOptions, debug = false) {
    super(options, debug);
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
            {x:Math.abs(startX - (startX + endX)*.5), y: Math.abs(startY - (startY + endY)*.5)}, // center
          ]
          : [
            {x:Math.abs(startX - (startX + endX)*.5), y: Math.abs(startY - (startY + endY)*.5)}, // center
          ]
      ),

      {x: endX, y: endY}
    ];

    return this.svgPath(points);
  }

  svgPath(points: Point[]): string {
    return `
    M ${points[0].x},${points[0].y}
    H ${points[1].x}
    V ${points[2].y}
    H ${points[2].x}
    `;
  };
}
