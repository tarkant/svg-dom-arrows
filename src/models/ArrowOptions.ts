import { SvgPather } from './Path';

export interface ArrowOptions {
    start: ArrowDOMElement;
    end: ArrowDOMElement;
    appendTo?: Element;
    manualRender?: boolean;
    svgPath?: SvgPather;
}

export interface ArrowDOMElement {
    /**
     * Any element you can select using `document.(getElementById | querySelector etc...)`
     */
    element: Element;
    /**
     * Where you'd like that you arrow starts/ends in percent, by default it's 0,0
     */
    position?: ArrowPosition;
}

export interface ArrowPosition {
    /**
     * Where you'd like that you arrow starts/ends in percent, by default it's 0,0
     */
    top: number;
    left: number;
    offsetX?: number;
    offsetY?: number;
}
