import { ArrowOptions } from './models/ArrowOptions';

export class Arrow {

  constructor(options: ArrowOptions, debug = false) {
    const startBbox = options.start.element.getBoundingClientRect();
    const endBbox = options.end.element.getBoundingClientRect();

    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    document.body.appendChild(svgPath);

    svgPath.appendChild(svgPathLine);

    const width = Math.abs(endBbox.left - startBbox.left);
    const height = Math.abs(endBbox.top - startBbox.top);

    const offsetX = startBbox.left > endBbox.left ? startBbox.left - endBbox.left : 0;
    const offsetY = startBbox.top > endBbox.top ? startBbox.top - endBbox.top : 0;

    // M Y1,Y2 X1,X2  for a simple line
    svgPathLine.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} ${width - offsetX},${height - offsetY}`);

    // M Yp1,Yp2 C Xc1,Yc1 Xc2,Yc2 Xp1,Xp2
    // svgpathline.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} C 0,${height / 2} ${width / 2},${height} ${width - offsetX},${height - offsetY}`);

    svgPath.setAttribute('width', `${width}`);
    svgPath.setAttribute('height', `${height}`);

    svgPath.style.position = 'absolute';
    svgPath.style.overflow = 'visible';

    if (debug) {
      svgPath.style.background = 'rgba(128,0,0,.2)';
    }

    svgPathLine.setAttribute('style', 'stroke:white;stroke-width:4;fill:transparent');

    svgPath.style.top = `${startBbox.top - offsetY}px`;
    svgPath.style.left = `${startBbox.left - offsetX}px`;

    console.table(startBbox);
    console.table(endBbox);
  }
}
