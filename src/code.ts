import { optimize } from "svgo/dist/svgo.browser.js";
import { PLUGINS } from "./config";
import { buildZipBase64, formatStringSize, getSvgString } from "./helpers";

type Element = { name: string; data: string; change: string }

let ELEMENTS: Element[] = [];

figma.showUI(__html__, { width: 500 });

figma.ui.onmessage = async (message: { type: string }) => {
  if (message.type === 'cancel') {
    figma.closePlugin();
  }

  if (message.type === "download-svgs") {
    figma.notify("SVG downloads initiated");

    const zipBase64 = await buildZipBase64(ELEMENTS);
    if (zipBase64) {
      figma.ui.postMessage({
        type: 'download-zip',
        zipBase64,
      });
    }
  }
};

const plugins = PLUGINS.filter(p => p.enabledByDefault).map((plugin) => ({
  name: plugin.id,
}));

const onSelection = async () => {
  const selection = figma.currentPage.selection;

  const elements: Element[] = [];
  for (const node of selection) {
    const component = await figma.getNodeByIdAsync(node.id);
    if (component) {
      await getSvgString(component).then((svgString) => {
        if (svgString) {
          const result = optimize(svgString, { plugins, multipass: true });
          elements.push({ name: component.name, data: result.data, change: `${formatStringSize(svgString)} -> ${formatStringSize(result.data)}` });
        }
      });
    }
  }

  ELEMENTS = [];
  elements.forEach((el) => ELEMENTS.push(el));

  figma.ui.postMessage({ type: 'selection-changed', elements });
}

figma.on('selectionchange', onSelection);



