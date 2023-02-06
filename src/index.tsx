import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './redux/redux-store';
import {App} from './app';

import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>,
  </React.StrictMode>
);
