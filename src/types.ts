export type Element = { name: string; data: string; change: string };

export type DownloadZipMessage = {
  type: 'download-zip';
  zipData: string;
};

export type SelectionChangedMessage = {
  type: 'selection-changed';
  elements: Element[];
};

export type UiMessage = {
  pluginMessage: DownloadZipMessage | SelectionChangedMessage;
};

export type Event = {
  data: UiMessage;
};

export type ParentMessage = {
  type: 'cancel' | 'download-svgs';
};
