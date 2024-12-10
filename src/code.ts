import { PLUGINS } from './config';
import { ParentMessage, Plugin } from './types';
import { onSelectionChanged, onUiMessage } from './helpers';

const enabledPlugins: Plugin[] = PLUGINS.filter((p) => p.enabledByDefault).map(
  (plugin) => ({ name: plugin.id })
);

figma.showUI(__html__, { width: 400, height: 725 });

figma.ui.onmessage = async (message: ParentMessage) => onUiMessage(message);

onSelectionChanged(enabledPlugins);

figma.on('selectionchange', () => onSelectionChanged(enabledPlugins));
