import * as assert from 'uvu/assert';
import { createElementFromConstructor } from '../../src/lib/utils';
import { suite } from './utils';

const test = suite();

test('createElementFromConstructor, SVG', ({ doc }) => {
  assert.is(createElementFromConstructor(doc, 'SVGFEFuncRElement')!.tagName, 'feFuncR');
  assert.is(
    createElementFromConstructor(doc, 'SVGFEGaussianBlurElement')!.tagName,
    'feGaussianBlur'
  );
  assert.is(createElementFromConstructor(doc, 'SVGFEBlendElement')!.tagName, 'feBlend');
  assert.is(createElementFromConstructor(doc, 'SVGForeignObjectElement')!.tagName, 'foreignObject');
  assert.is(
    createElementFromConstructor(doc, 'SVGLinearGradientElement')!.tagName,
    'linearGradient'
  );
  assert.is(createElementFromConstructor(doc, 'SVGClipPathElement')!.tagName, 'clipPath');
  assert.is(createElementFromConstructor(doc, 'SVGTSpanElement')!.tagName, 'tspan');
  assert.is(createElementFromConstructor(doc, 'SVGMPathElement')!.tagName, 'mpath');
  assert.is(createElementFromConstructor(doc, 'SVGDefsElement')!.tagName, 'defs');
  assert.is(createElementFromConstructor(doc, 'SVGGraphicsElement')!.tagName, 'g');
  assert.is(createElementFromConstructor(doc, 'SVGImageElement')!.tagName, 'image');
  assert.is(createElementFromConstructor(doc, 'SVGAElement')!.tagName, 'a');
  assert.is(createElementFromConstructor(doc, 'SVGPathElement')!.tagName, 'path');
  assert.is(createElementFromConstructor(doc, 'SVGSVGElement')!.tagName, 'svg');
  assert.is(createElementFromConstructor(doc, 'SVGGraphics'), undefined);
  assert.is(createElementFromConstructor(doc, 'GraphicsElement'), undefined);
});

test('createElementFromConstructor, HTML', ({ doc }) => {
  assert.is(createElementFromConstructor(doc, 'HTMLAnchorElement')!.tagName, 'A');
  assert.is(createElementFromConstructor(doc, 'HTMLDListElement')!.tagName, 'DL');
  assert.is(createElementFromConstructor(doc, 'HTMLImageElement')!.tagName, 'IMG');
  assert.is(createElementFromConstructor(doc, 'HTMLOListElement')!.tagName, 'OL');
  assert.is(createElementFromConstructor(doc, 'HTMLParagraphElement')!.tagName, 'P');
  assert.is(createElementFromConstructor(doc, 'HTMLTableCaptionElement')!.tagName, 'CAPTION');
  assert.is(createElementFromConstructor(doc, 'HTMLTableCellElement')!.tagName, 'TD');
  assert.is(createElementFromConstructor(doc, 'HTMLTableColElement')!.tagName, 'COLGROUP');
  assert.is(createElementFromConstructor(doc, 'HTMLTableRowElement')!.tagName, 'TR');
  assert.is(createElementFromConstructor(doc, 'HTMLTableSectionElement')!.tagName, 'TBODY');
  assert.is(createElementFromConstructor(doc, 'HTMLDivElement')!.tagName, 'DIV');
  assert.is(
    createElementFromConstructor(doc, 'HTMLDivElement')!.namespaceURI,
    'http://www.w3.org/1999/xhtml'
  );
  assert.is(createElementFromConstructor(doc, 'HTMLElement'), undefined);
  assert.is(createElementFromConstructor(doc, 'HTMLConstructor'), undefined);
  assert.is(createElementFromConstructor(doc, 'ConstructorElement'), undefined);
  assert.is(createElementFromConstructor(doc, 'IntersectionObserver'), undefined);
});

test.run();
