import { Point } from './../models';
import { Path } from './Path';

export class LinePath extends Path {
  getPath(): string {
    const { width, height, start, end } = this.getSVGProportions();

    const startX = start.x > end.x ? width : 0;
    const startY = start.y > end.y ? height : 0;
    const endX = width - startX;
    const endY = height - startY;

    const points = [
      { x: startX, y: startY },
      { x: endX, y: endY },
    ];

    return this.svgPath(points);
  }

  svgPath(points: Point[]): string {
    return `M ${points[0].x},${points[0].y} ${points[1].x},${points[1].y}`;
  }
}
