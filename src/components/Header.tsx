import React from 'react';
import * as css from './Header.css';

type Props = {
  elementsSelected: boolean;
  onDownload: () => void;
};

export const Header = ({ elementsSelected, onDownload }: Props) => (
  <div className={css.title}>
    <div>Selected SVGs:</div>
    <div className={css.actions}>
      {elementsSelected && (
        <button
          onClick={onDownload}
          className={css.button({ kind: 'primary' })}
        >
          Download all as ZIP
        </button>
      )}
    </div>
  </div>
);
