/**
 * This class is composed of static utility functions that lets the library make DOM manipulations without
 * adding a layer of complexity.
 */
export class DomUtils {
    /**
     * Converts a html string to HTML elements
     * @param {String} HTML representing any number of sibling elements
     * @return {NodeList} Generated array of ChildNodes from the inputted string
    */
    public static htmlToElements(html: string): NodeListOf<ChildNode> {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}
