import { UiMessage, ParentMessage, Element, Plugin } from './types';
import { buildZipBase64, delay, formatStringSize, getSvgString } from './utils';
import { optimize } from 'svgo/dist/svgo.browser.js';

export const postUiMessage = ({
  type,
  ...payload
}: UiMessage['pluginMessage']) => {
  figma.ui.postMessage({ type, ...payload });
};

export const postParentMessage = ({ type, ...payload }: ParentMessage) => {
  parent.postMessage({ pluginMessage: { type, ...payload } }, '*');
};

export const processSelectedNodes = async (
  selection: readonly SceneNode[],
  plugins: Plugin[]
) => {
  const elements: Element[] = [];
  for (const node of selection) {
    const component = await figma.getNodeByIdAsync(node.id);
    if (component) {
      await getSvgString(component).then((svgString) => {
        if (svgString) {
          const result = optimize(svgString, { plugins });
          elements.push({
            name: component.name,
            data: result.data,
            change: `${formatStringSize(svgString)} -> ${formatStringSize(result.data)}`,
          });
        }
      });
    }
  }
  return elements;
};

export const waitForUiToGetMessage = async () => await delay(1000);

const downloadSvgs = async (svgs: Element[]) => {
  postUiMessage({ type: 'downloading-started' });
  figma.notify('SVG downloads initiated');
  const zipData = await buildZipBase64(svgs);
  postUiMessage({ type: 'download-zip', zipData });
};

export const onUiMessage = async (message: ParentMessage) => {
  switch (message.type) {
    case 'download-svgs': {
      downloadSvgs(message.elements);
      break;
    }

    default: {
      throw new Error(`Unsupported parent message type ${message.type}`);
    }
  }
};

export const onSelectionChanged = async (svgOptimisationPlugins: Plugin[]) => {
  postUiMessage({ type: 'optimization-started' });
  await waitForUiToGetMessage();
  const selection = figma.currentPage.selection;
  const elements = await processSelectedNodes(
    selection,
    svgOptimisationPlugins
  );
  postUiMessage({ type: 'selection-changed', elements });
};
