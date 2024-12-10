import { UiMessage, ParentMessage } from './types';

export const postUiMessage = ({
  type,
  ...payload
}: UiMessage['pluginMessage']) => {
  figma.ui.postMessage({ type, ...payload });
};

export const postParentMessage = ({ type }: ParentMessage) => {
  parent.postMessage({ pluginMessage: { type } }, '*');
};
