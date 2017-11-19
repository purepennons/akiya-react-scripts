import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './layouts/App';
import store from './redux/store/';
import history from './redux/store/history';

import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </div>,
  document.getElementById('root'),
);
registerServiceWorker();
