import React from 'react';
import startMockServer from './services/server';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import App from './App.tsx';
import './index.scss';

startMockServer();

const root = document.getElementById('root')!;
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
