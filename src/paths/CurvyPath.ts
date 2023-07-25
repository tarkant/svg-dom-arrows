import { Path } from './Path';
import { PathOptions, Point } from '@src/models';

export class CurvyPath extends Path {
  constructor(options: PathOptions) {
    super(options);
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

    const startX = start.x > end.x ? width : 0;
    const startY = start.y > end.y ? height : 0;
    const endX = width - startX;
    const endY = height - startY;

    const points = [
      { x: startX, y: startY },

      ...[
        { x: Math.abs(startX - (startX + endX) * 0.5), y: startY },
        {
          x: Math.abs(startX - (startX + endX) * 0.5),
          y: Math.abs(startY - (startY + endY) * 0.5),
        }, // center
        { x: Math.abs(startX - (startX + endX) * 0.5), y: endY },
      ],

      { x: endX, y: endY },
    ];

    return this.svgPath(points);
  }

  svgPath(points: Point[]): string {
    return `
    M ${points[0].x},${points[0].y}
    C ${points[1].x},${points[1].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y}
    C ${points[3].x},${points[3].y} ${points[3].x},${points[3].y} ${points[4].x},${points[4].y}
    `;
  }
}
