export interface ArrowOptions {
    start: ArrowDOMElement;
    end: ArrowDOMElement;
}

interface ArrowDOMElement {
    /**
     * Any element you can select using `document.(getElementById | querySelector etc...)`
     */
    element: Element;
    /**
     * Where you'd like that you arrow starts/ends in percent, by default it's 0,0
     */
    position?: {
        top?: number;
        right?: number;
    };
}
