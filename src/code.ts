import { optimize } from 'svgo/dist/svgo.browser.js';
import { PLUGINS } from './config';
import { buildZipBase64, formatStringSize, getSvgString } from './utils';
import { Element, ParentMessage } from './types';
import { postUiMessage } from './helpers';

let ELEMENTS: Element[] = [];

const enabledPlugins = PLUGINS.filter((p) => p.enabledByDefault).map(
  (plugin) => ({ name: plugin.id })
);

figma.showUI(__html__, { width: 400, height: 300 });

figma.ui.onmessage = async (message: ParentMessage) => {
  switch (message.type) {
    case 'cancel': {
      figma.closePlugin();
      break;
    }
    case 'download-svgs': {
      figma.notify('SVG downloads initiated');
      const zipData = await buildZipBase64(ELEMENTS);
      postUiMessage({ type: 'download-zip', zipData });
      break;
    }
    default: {
      throw new Error(`Unsupported parent message type ${message.type}`);
    }
  }
};

const onSelection = async () => {
  const selection = figma.currentPage.selection;
  const elements: Element[] = [];

  for (const node of selection) {
    const component = await figma.getNodeByIdAsync(node.id);
    if (component) {
      await getSvgString(component).then((svgString) => {
        if (svgString) {
          const result = optimize(svgString, { plugins: enabledPlugins });
          elements.push({
            name: component.name,
            data: result.data,
            change: `${formatStringSize(svgString)} -> ${formatStringSize(result.data)}`,
          });
        }
      });
    }
  }

  ELEMENTS = [];
  elements.forEach((el) => ELEMENTS.push(el));
  postUiMessage({ type: 'selection-changed', elements });
};

figma.on('selectionchange', onSelection);
