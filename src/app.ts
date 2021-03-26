import './styles.scss';

const start = document.querySelector('.start');
const end = document.querySelector('.end');

const startBbox = start.getBoundingClientRect();
const endBbox = end.getBoundingClientRect();

const svgpath = document.querySelector('#svgpath') as SVGElement;
const svgpathline = document.querySelector('#svgpath path') as SVGPathElement;

const width = Math.abs(endBbox.left - startBbox.left);
const height = Math.abs(endBbox.top - startBbox.top);

const offsetX = startBbox.left > endBbox.left ? startBbox.left - endBbox.left : 0;
const offsetY = startBbox.top > endBbox.top ? startBbox.top - endBbox.top : 0;

// M Y1,Y2 X1,X2  for a simple line
svgpathline.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} ${width - offsetX},${height - offsetY}`);
// M Yp1,Yp2 C Xc1,Yc1 Xc2,Yc2 Xp1,Xp2
svgpathline.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} C 0,${height / 2} ${width / 2},${height} ${width - offsetX},${height - offsetY}`);

svgpath.setAttribute('width', `${width}`);
svgpath.setAttribute('height', `${height}`);

svgpath.style.top = `${startBbox.top - offsetY}px`;
svgpath.style.left = `${startBbox.left - offsetX}px`;

console.table(startBbox);
console.table(endBbox);
