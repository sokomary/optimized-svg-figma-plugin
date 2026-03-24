import { PLUGINS } from './config';
import { ParentMessage } from './types';
import { onSelectionChanged, onUiMessage } from './helpers';
import { PluginConfig } from 'svgo/browser';

const enabledPlugins: PluginConfig[] = PLUGINS.filter(
  (p) => p.enabledByDefault,
).map((plugin) => plugin.id);

figma.showUI(__html__, { width: 400, height: 725, themeColors: true });

figma.ui.onmessage = async (message: ParentMessage) => onUiMessage(message);

onSelectionChanged(enabledPlugins);

figma.on('selectionchange', () => onSelectionChanged(enabledPlugins));
