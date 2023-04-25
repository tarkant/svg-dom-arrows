import { LinePath } from './../paths/LinePath';
import { PathOptions } from '../models/PathOptions';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = global.document.defaultView;

const start = document.createElement('div');
start.setAttribute('style', 'display:block;position:absolute;height:64px;left:32px;position:absolute;top:64px;width:64px');

const end = document.createElement('div');
end.setAttribute('style', 'display:block;position:absolute;height:64px;left:160px;position:absolute;top:256px;width:64px');

const options: PathOptions = {
  start: {
    element: start,
  },
  end: {
    element: end,
  },
  style: 'stroke:black;stroke-width:4;fill:transparent',
  appendTo: document.body, // Optional
};
const arrow = new LinePath(options);

test('[LinePath] basic usage', () => {
  console.log(arrow.getPath());
  console.log(start.outerHTML);
  expect(arrow !== undefined) ;
});

