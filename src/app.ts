import { off } from 'node:process';
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

svgpathline.setAttribute('d', `M ${0 + offsetX},${0 + offsetY} ${width - offsetX},${height - offsetY}`);

svgpath.setAttribute('width', `${width}`);
svgpath.setAttribute('height', `${height}`);

svgpath.style.top = `${startBbox.top - offsetY}px`;
svgpath.style.left = `${startBbox.left - offsetX}px`;

console.table(startBbox);
console.table(endBbox);
