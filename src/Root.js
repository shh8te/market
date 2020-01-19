import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

const Root = ({ dealers }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App dealers={dealers} />
      </PersistGate>
    </Provider>
  );
};

export default Root;
