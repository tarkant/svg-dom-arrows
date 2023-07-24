export interface Point {
  x: number;
  y: number;
}

export type SvgPather = (points: Point[]) => string;
