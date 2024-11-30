"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.onmessage = (message) => {
    console.log('Download path: ', message.path);
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};
function getSvgString(node) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if ('exportAsync' in node) {
                const svgData = yield node.exportAsync({ format: 'SVG' });
                const svgString = String.fromCharCode(...svgData);
                return svgString;
            }
            else {
                throw new Error('This node type does not support export.');
            }
        }
        catch (error) {
            console.error('Error exporting SVG:', error);
            return null;
        }
    });
}
const onSelection = () => __awaiter(void 0, void 0, void 0, function* () {
    const selection = figma.currentPage.selection;
    if (!selection) {
        figma.notify('Select frame or group', {
            timeout: 5000,
        });
        return;
    }
    for (const node of selection) {
        const component = yield figma.getNodeByIdAsync(node.id);
        if (component) {
            getSvgString(component).then((svgString) => {
                if (svgString) {
                    console.log('Svg: ', svgString);
                }
            });
        }
    }
    figma.ui.postMessage({ type: 'selectedElement', selection: selection });
});
figma.on('selectionchange', onSelection);
