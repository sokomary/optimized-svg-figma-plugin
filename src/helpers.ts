import { ONE_KBITE_IN_BITES } from "./consts";
import * as JSZip from "jszip";

export async function getSvgString(node: BaseNode) {
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

export const getStringSizeInBytes = (str: string) => {
  let bytes = 0;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 0x7F) {
      bytes += 1; // 1 byte for characters in the range 0x00-0x7F
    } else if (charCode <= 0x7FF) {
      bytes += 2; // 2 bytes for characters in the range 0x80-0x7FF
    } else if (charCode <= 0xFFFF) {
      bytes += 3; // 3 bytes for characters in the range 0x800-0xFFFF
    } else {
      bytes += 4; // 4 bytes for characters outside the BMP (rare)
    }
  }

  return bytes;
}

export const formatStringSize = (str: string) =>
  `${(getStringSizeInBytes(str) / ONE_KBITE_IN_BITES).toFixed(2)}kB`;

export async function buildZipBase64(svgs: { data: string, name: string }[]): Promise<string> {
  try {
    const zip = new JSZip();
    svgs.forEach(svg => zip.file(`${svg.name}.svg`, svg.data));
    return await zip.generateAsync({ type: 'base64' });
  } catch (error) {
    figma.notify("Something went wrong while building ZIP");
    throw error;
  }
}