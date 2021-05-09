import { SvgPather } from './Path';

export interface PathOptions {
    start: PathDOMElement;
    end: PathDOMElement;
    appendTo?: Element;
    manualRender?: boolean;
    svgPath?: SvgPather;
}

export interface PathDOMElement {
    /**
     * Any element you can select using `document.(getElementById | querySelector etc...)`
     */
    element: Element;
    /**
     * Where you'd like that you Path starts/ends in percent, by default it's 0,0
     */
    position?: PathPosition;
}

export interface PathPosition {
    /**
     * Where you'd like that you Path starts/ends in percent, by default it's 0,0
     */
    top: number;
    left: number;
    offsetX?: number;
    offsetY?: number;
}
