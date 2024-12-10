import { useEffect, useState } from 'react';
import { Event, Element, UiState } from './types';
import { createZipLink } from './utils';
import { postParentMessage } from './helpers';

export const useLogic = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [state, setState] = useState<UiState>('empty');

  const onMessage = (event: Event) => {
    const message = event.data.pluginMessage;
    const { type } = message;

    switch (type) {
      case 'download-zip': {
        setState('not-empty');
        const link = createZipLink(message.zipData);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      case 'downloading-started': {
        setState('downloading');
        break;
      }
      case 'selection-changed': {
        const { elements } = message;
        setElements(elements);
        setState(elements.length > 0 ? 'not-empty' : 'empty');
        break;
      }
      case 'optimization-started': {
        setState('optimisation');
        break;
      }
      default: {
        throw new Error(`Unsupported type ${type}`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const download = () => postParentMessage({ type: 'download-svgs', elements });

  return {
    elements,
    download,
    state,
  };
};
