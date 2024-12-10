export type Element = { name: string; data: string; change: string };

export type UiState = 'empty' | 'not-empty' | 'optimisation' | 'downloading';

export type Plugin = {
  name: string;
};

export type OptimizationStartedUiMessage = {
  type: 'optimization-started';
};

export type DownloadingStartedUiMessage = {
  type: 'downloading-started';
};

export type DownloadZipMessage = {
  type: 'download-zip';
  zipData: string;
};

export type SelectionChangedMessage = {
  type: 'selection-changed';
  elements: Element[];
};

export type UiMessage = {
  pluginMessage:
    | DownloadZipMessage
    | SelectionChangedMessage
    | OptimizationStartedUiMessage
    | DownloadingStartedUiMessage;
};

export type Event = {
  data: UiMessage;
};

export type StartDownloadSvgsParentMessage = {
  type: 'download-svgs';
  elements: Element[];
};

export type ParentMessage = StartDownloadSvgsParentMessage;
