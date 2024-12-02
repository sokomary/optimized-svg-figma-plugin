import { optimize } from "svgo/dist/svgo.browser.js";

figma.showUI(__html__);

figma.ui.onmessage = (message: { path: string }) => {
  console.log('Download path: ', message.path);

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};

async function getSvgString(node: BaseNode) {
  try {
    if ('exportAsync' in node) {
      const svgData = await node.exportAsync({ format: 'SVG' });
      const svgString = String.fromCharCode(...Array.from(svgData));
      return svgString;
    } else {
      throw new Error('This node type does not support export.');
    }
  } catch (error) {
    console.error('Error exporting SVG:', error);
    return null;
  }
}

const onSelection = async () => {
  const selection = figma.currentPage.selection;

  if (!selection) {
    figma.notify('Select frame or group', {
      timeout: 5000,
    });
    return;
  }

  for (const node of selection) {
    const component = await figma.getNodeByIdAsync(node.id);
    if (component) {
      getSvgString(component).then((svgString) => {
        if (svgString) {
          const result = optimize(svgString);
          console.log(result);
        }
      });
    }
  }


  figma.ui.postMessage({ type: 'selectedElement', selection: selection});

}

figma.on('selectionchange', onSelection);


