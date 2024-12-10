import React from 'react';
import * as css from './EmptyState.css';

export const EmptyState = () => (
  <div className={css.container}>
    <div>No elements selected</div>
    <div className={css.note}>
      Please, select some SVG elements to start optimization
    </div>
  </div>
);
