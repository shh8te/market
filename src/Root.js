import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Root;
