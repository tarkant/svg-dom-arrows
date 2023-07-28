# 🏹 SVG DOM Arrows [![CircleCI](https://dl.circleci.com/status-badge/img/gh/tarkant/svg-dom-arrows/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/tarkant/svg-dom-arrows/tree/master)

Draw an arrow from one HTML element to another with a simple API and 0 dependencies.

## How to get started? ✨

To get started, you'll need 3 things:

* Your starting DOM element.
* Your ending DOM element.
* The style of your SVG path.

Simple implementation:

```ts
    const options: PathOptions = {
      start: {
        element: document.getElementById('myGreenBox'),
      },
      end: {
        element: document.getElementById('myGreyBox'),
      },
      style: 'stroke:black;stroke-width:4;fill:transparent',
      appendTo: document.body, // Optional
    };
    const arrow = new LinePath(options);

    // Output

    arrow = {
        containerDiv: HTMLDivElement,// The generated div containing the SVG element
        startBbox: DOMRect, // Internal object used by the class to calculate the arrow path
        endBbox: DOMRect, // Internal object used by the class to calculate the arrow path
        options: PathOptions, // The options object passed
        svgElement: SVGSVGElement, // The generated SVG element containing the path
        svgPathLine: SVGPathElement, // The generated path
    };
```

**ℹ Note:** If you don't specify the `appendTo` option, the SVG path will be rendered but not appended to the document. It will be up to you to append it to a `div` for example.

Below a screenshot resulting from the code:

![line-path-example](https://github.com/tarkant/svg-dom-arrows/blob/master/images/line-path-example.png)

Below some demos using vanilla TS/JS and other frameworks/

### Demos ✨

You can checkout some demos here with few libs and frameworks so you can get yourself started with the implementation. In a way, `svg-dom-arrows` will work with anything, it has no dependencies and just uses plain DOM elements. But just in case, I've tried it with Angular, Vue and React as you can see below:

* [Vanilla demo](https://stackblitz.com/edit/svg-dom-arrows-demo?file=index.ts)
* [Angular Demo](https://stackblitz.com/edit/svg-arrow-dom-angular?file=src/app/arrow.demo/arrow.demo.component.ts)
* [Vue Demo](https://stackblitz.com/edit/svg-dom-arrow-vue?file=src/components/ArrowDemo.vue)
* [React Demo](https://stackblitz.com/edit/svg-dom-arrows-react-h2dg88?file=src/ArrowDemo.js)

### Positioning ➕

Positioning is based on a left and top axis, below a simple visualization of how the axes are based on the element. 0 is at the left of the element, 1 would be at 100% left from the origin.

![positioning-axis-guide](https://github.com/tarkant/svg-dom-arrows/blob/master/images/positioning-guide.svg)

You might have noticed that the drawn path starts from position 0,0 of `myGreenBox` to 0,0 at `myGreyBox`. If no position is specified, the tool will assume you want it to start from 0,0. You can of course set the position as you like as follows:

```ts
    const options: PathOptions = {
      start: {
        element: document.getElementById('myGreenBox'),
        position: {
          top: .5, // 0 being the top of the element
          left: 1, // 0 is at the right of the element
        },
      },
      end: {
        element: document.getElementById('myGreyBox'),
        position: {
          top: .5,
          left: 0,
        },
      },
      style: 'stroke:black;stroke-width:4;fill:transparent',
      appendTo: document.body,
    };
    const arrow = new LinePath(options);
```

The result would be as follows:

![line-path-example-axis](https://github.com/tarkant/svg-dom-arrows/blob/master/images/line-path-example-axis.png)

**ℹ Note:** 0 to 1 are the max values inside the BBox of the DOM element. This does not mean that you're limited to those values. You can experiment with negative values or < 1 values.

### Styling 🎨

The `style` options will be copied directly to the SVG path's style attribute. This being an SVG, it's a little bit different than the usual CSS. Besides what's mostly important is that:

* `stroke:<color>` to set the color of the line.
* `stroke-width:<number>` to set the thickness of your line.
* `fill:transparent` to keep only the line and avoid having a default black color.

You can find a lot of resources about styling your SVG path to suit your needs.

### Markers ↗

The API lets you add markers to your SVG path. Markers can be a path or a group, the API just expects an `SVGMarkerElement` with an ID attribute that it can then append to the defs.

You just need to add the markerId for your start or end element and it will do the job, eg:

```ts
/**
 * This function just returns an `SVGMarkerElement` that's already pre-styled and so on
 */
const createMarker  = (): SVGMarkerElement => {
  const arrow = document.createElementNS(SVGNS, 'path');
  const marker = document.createElementNS(SVGNS, 'marker');

  arrow.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
  arrow.setAttribute('style', 'fill:white;stroke-width:0.801524;stroke-miterlimit:4;stroke-dasharray:none');

  marker.setAttribute('id', 'marker1'); // <== Make sure to set an id attribute
  /**
   * The below attributes and values are specific to this marker, you'll have to know how markers work
   * to really do something fun. For now you'll have to deal with it manually but I might work on an SVG
   * marker utility.
   */
  marker.setAttribute('refX', '5');
  marker.setAttribute('refY', '5');
  marker.setAttribute('viewBox', '0 0 10 10');
  marker.setAttribute('orient', 'auto-start-reverse'); // <== There is a trick here, be sure to read after the code snippet
  marker.setAttribute('markerWidth', '6');
  marker.setAttribute('markerHeight', '6');
  marker.appendChild(arrow);

  return marker;
};

const s = document.querySelector('.case-1');
const e = document.querySelector('.case-4');
const line = new LinePath({
  start: {
    element: s,
    position: {
      top: .45,
      left: 1,
    },
    markerId: '#marker1', // <== We attribute the marker id for the start of the path
  },
  end: {
    element: e,
    position: {
      top: .5,
      left: 0,
    },
    markerId: '#marker1',  // <== We attribute the same marker to the end of the path
  },
  style: 'stroke:white;stroke-width:4;fill:transparent',
  appendTo: document.body,
  markers: [createMarker()], // Supply your markers as an array to this option
  // Custom CSS classes that you can add for additional styling
  // CSS classes should be as follows: `foo bar baz` and NOT `.foo.bar.baz`
  customClass: {
    container: `container-${idx} foo bar`,
    svgPath: `path-${idx} baz`,
    svgElement: `element-${idx}`,
  }
}, true);
```

Below the result with an arrow going from the starting to ending DIVs with an arrow marker:

![line-path-example-w-markers](https://github.com/tarkant/svg-dom-arrows/blob/master/images/line-path-example-w-markers.png)

As you can see, the marker orients itself correctly, this is due to `marker.setAttribute('orient', 'auto-start-reverse')` and how the path was drawn it the first place.

To put it simply, you really need to know how markers work to make nice arrows. I'll follow up with a tool that may help solve this issue in the future hopefully! Of course, if you know a guy who knows a guy who knows how to deal with this, please tell them to chime in!

### Other options 🐣

You can checkout [PathOptions.ts](https://github.com/tarkant/svg-dom-arrows/blob/master/src/models/PathOptions.ts) to see what other options you can supply. The most useful for now is `manualRender` that if you set to true will **not** render your SVG. You'll have then to call `render()` to do it.

## Adding another Path style 🔌

Adding your own path style is pretty straightforward. The only *"drawback"* is that you'll have to do it in TypeScript. Anyway, let me walk you through how you can do this (I'll take `CurvyPath` as an example):

1. Create your `CurvyPath.ts` file under `src/paths/`.
2. Extend the `LinePath` class as it's your base class.
3. Implement your own logic in `getPath()` and `svgPath()`.
4. Export your `CurvyPath.ts` in the barrel file `src/paths/index.ts`.
5. Done 🎉.

To get ahold of how this all works, you can checkout [LinePath.ts](https://github.com/tarkant/svg-dom-arrows/blob/master/src/paths/LinePath.ts) which is your base class. It provides you with everything you need.

And of course you can checkout the [/src/paths/](https://github.com/tarkant/svg-dom-arrows/tree/master/src/paths) folder to understand how extending the base class makes things easier.

**Note ℹ:** The only thing you need to respect is to use `PathOptions.ts` to keep the API consistent. If you need to add options, please add them as optional properties.

## 💻 How to run the development server ?

Easy, run this command and your server will be on `http://localhost/3000`:

```bash
npm start
```

## 🆘 Issues and contributions

If you have an issue with this library or want to contribute, please let me know I'll be happy to interact with you.

## ⏲ Changelog

- v2.1.5 : Deprecated the method `recalculate()` and renamed it to `redraw()` suggested by [@calumk](https://github.com/calumk) in [#35](https://github.com/tarkant/svg-dom-arrows/issues/35)
- v2.1.4 : Integrated [@JacerOmri](https://github.com/JacerOmri) PR [!34](https://github.com/tarkant/svg-dom-arrows/pull/34)
- v2.1.3 : Updated .npmignore rules + updated the CI + added github package publish
- v2.1.2 : Exposed the SVG path, SVG element and div container + general tests fixes
- v2.1.1 : Fix auto-publish github action
- v2.1.0 : Added the option to set custom CSS classes for the div container, svg element and svg path as suggested by [@rbozan](https://github.com/rbozan) in [#32](https://github.com/tarkant/svg-dom-arrows/issues/32) and [#33](https://github.com/tarkant/svg-dom-arrows/issues/33)
- v2.1.0-beta.1 : Added the option to set custom CSS classes for the div container, svg element and svg path as suggested by [@rbozan](https://github.com/rbozan) in [#32](https://github.com/tarkant/svg-dom-arrows/issues/32) and [#33](https://github.com/tarkant/svg-dom-arrows/issues/33)
- v2.0.8 : npm audit fixes + test new github action
- v2.0.7 : Fixed issue [#30](https://github.com/tarkant/svg-dom-arrows/issues/30) reported by [@Flambe](https://github.com/Flambe) related to the besier behavior on small offsets + added github action for auto npm publish 🎉
- v2.0.7-beta.1 : Fixed issue [#30](https://github.com/tarkant/svg-dom-arrows/issues/30) reported by [@Flambe](https://github.com/Flambe) related to the besier behavior on small offsets
- v2.0.6 : Fixed issue [#31](https://github.com/tarkant/svg-dom-arrows/issues/31) reported by [@Flambe](https://github.com/Flambe).
- v2.0.6-beta.1 : Fixed issue [#31](https://github.com/tarkant/svg-dom-arrows/issues/31) reported by [@Flambe](https://github.com/Flambe).
- v2.0.5: e2e tests + fixed issue [#29](https://github.com/tarkant/svg-dom-arrows/issues/29) with typings not being bundled after the build thanks to [@Flambe](https://github.com/Flambe).
- v2.0.4: Fixed issue [#27](https://github.com/tarkant/svg-dom-arrows/issues/27) related to positioning relatively to the appendTo element + fixed unit tests thanks to [@jan-dolejsi](https://github.com/jan-dolejsi).
- v2.0.4-beta.1: Fixed issue [#27](https://github.com/tarkant/svg-dom-arrows/issues/27) related to positioning relatively to the appendTo element.
- v2.0.2: Documented the code, added `SvgProportions` type, `recalculate()` method, and improved readme.
- v2.0.1: Fixed issue with typings not being packaged.
- v2.0.0a: Rewrote from the ground up the full API and implementation.
- v1.0.0: Forked and improved from [sasza2/arrows](https://github.com/sasza2/arrows)
