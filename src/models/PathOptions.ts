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
    /**
     * Custom CSS class for the following items:
     * - The `div` representing the container element
     * - The `path` representing the SVG path
     * - The `svg` tag containing all the SVG
     * CSS classes must be added like in the markup:
     * eg. `foo bar baz` and **NOT** `.foo.bar.baz`
     */
    customClass?: {
      container?: string;
      svgPath?: string;
      svgElement?: string;
    };
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
