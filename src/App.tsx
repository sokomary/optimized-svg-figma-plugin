import React from 'react';
import { useLogic } from './App.useLogic';
import * as css from './App.css';

function App() {
  const { elements, cancel, download } = useLogic();

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.elements}>
          <h3>
            {elements.length === 0
              ? 'Select some SVG elements to start'
              : 'Selected SVGs:'}
          </h3>
          <div>
            {elements.map((element, index) => (
              <div key={index}>
                ${element.name} (${element.change})
              </div>
            ))}
          </div>
        </div>
        <div className={css.actions}>
          {elements.length > 0 && (
            <button onClick={download} className={css.buttonDownload}>
              Download
            </button>
          )}
          <button onClick={cancel} className={css.buttonCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
