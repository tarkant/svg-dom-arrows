import { SvgPather } from './Path';

export interface PathOptions {
    start: PathDomElement;
    end: PathDomElement;
    style: string;
    appendTo?: Element;
    manualRender?: boolean;
    svgPath?: SvgPather;
    /**
     * List of SVG markers to be added to the SVG defs
     */
    markers?: SVGMarkerElement[];
}

export interface PathDomElement {
    /**
     * Any element you can select using `document.(getElementById | querySelector etc...)`
     */
    element: Element;
    /**
     * Where you'd like that you Path starts/ends in percent, by default it's 0,0
     */
    position?: PathPosition;
    /**
     * The marker ID referring to the SVGMarkerElement you'll have to add in PathOptions
     */
    markerId?: string;
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
