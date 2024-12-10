import { useEffect, useState } from 'react';
import { Event, Element } from './types';
import { createZipLink } from './utils';
import { postParentMessage } from './helpers';

export const useLogic = () => {
  const [elements, setElements] = useState<Element[]>([]);

  const onMessage = (event: Event) => {
    const message = event.data.pluginMessage;
    const { type } = message;

    switch (type) {
      case 'download-zip': {
        const link = createZipLink(message.zipData);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      case 'selection-changed': {
        setElements(message.elements);
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

  const cancel = () => postParentMessage({ type: 'cancel' });

  const download = () => postParentMessage({ type: 'download-svgs' });

  return {
    elements,
    cancel,
    download,
  };
};
