import { SVGNS } from '../src';

export const createMarker = (): SVGMarkerElement => {
  const arrow = document.createElementNS(SVGNS, 'path');
  const marker = document.createElementNS(SVGNS, 'marker');

  arrow.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
  arrow.setAttribute(
    'style',
    'fill:white;stroke-width:0.801524;stroke-miterlimit:4;stroke-dasharray:none',
  );

  marker.setAttribute('id', 'marker1');
  marker.setAttribute('refX', '5');
  marker.setAttribute('refY', '5');
  marker.setAttribute('viewBox', '0 0 10 10');
  marker.setAttribute('orient', 'auto-start-reverse');
  marker.setAttribute('markerWidth', '6');
  marker.setAttribute('markerHeight', '6');
  marker.appendChild(arrow);

  return marker;
};
