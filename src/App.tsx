import React from 'react';
import { useLogic } from './App.useLogic';
import * as css from './App.css';

function App() {
  const { elements, download } = useLogic();

  return (
    <div className={css.container}>
      <div className={css.content}>
        {elements.length === 0 ? (
          <div className={css.emptyState}>
            <div>No elements selected</div>
            <div className={css.emptyNote}>
              Please, select some SVG elements to start optimization
            </div>
          </div>
        ) : (
          <div className={css.title}>
            <div>Selected SVGs:</div>
            <div className={css.actions}>
              {elements.length > 0 && (
                <button
                  onClick={download}
                  className={css.button({ kind: 'primary' })}
                >
                  Download all as ZIP
                </button>
              )}
            </div>
          </div>
        )}

        {elements.map((element, index) => (
          <div key={index} className={css.element}>
            <div>{element.name} </div>
            <div className={css.note}>{element.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
