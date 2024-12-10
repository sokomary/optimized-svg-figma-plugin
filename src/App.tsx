import React from 'react';
import { useLogic } from './App.useLogic';
import { EmptyState, WaitingState, ElementsList, Header } from './components';
import * as css from './App.css';

function App() {
  const { elements, download, state } = useLogic();

  const renderContent = () => {
    switch (state) {
      case 'not-empty': {
        return (
          <>
            <Header
              elementsSelected={elements.length > 0}
              onDownload={download}
            />
            <ElementsList elements={elements} />
          </>
        );
      }
      case 'empty': {
        return <EmptyState />;
      }
      case 'downloading':
      case 'optimisation': {
        return <WaitingState state={state} />;
      }
    }
  };

  return (
    <div className={css.container}>
      <div className={css.content}>{renderContent()}</div>
    </div>
  );
}

export default App;
