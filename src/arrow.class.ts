import { DomUtils } from "./utils/dom-utils.class";
import { ends } from './arrow/ends';
import { path } from './arrow/path';
import { ArrowPath } from "./models/arrow-path.model";

export class Arrow {

    private arrowPath: ArrowPath;
    private node: ChildNode;

    constructor({
        className = 'arrow', from, to, shapeApparence,
    }) {
        this.arrowPath = path(ends(from), ends(to), shapeApparence);
        this.node = this.drawSvgContent(this.arrowPath, className);
    }

    private drawSvgContent(arrow, className: string): ChildNode {
        const node = DomUtils.htmlToElements(`<svg class="${className}"
            style="top: ${arrow.offset.y}px; left: ${arrow.offset.x}px; position: absolute"
            width=${arrow.size.width} height="${arrow.size.height}">
            <defs
                id="defs2">
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                    markerWidth="12" markerHeight="12"
                    orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
            </defs>
            <path class="${className}__path" d="${arrow.points}" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
            </svg>`)[0];
        return node;
    }

    public getNode(): ChildNode {
        return this.node;
    }
}