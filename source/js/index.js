import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import logger from 'dev/logger';
import rootReducer from 'reducers';
import Routes from 'routes';

// Load SCSS
import '../scss/app.scss';

const isProduction = process.env.NODE_ENV === 'production';

// Create a history
const history = createHistory();

const middlewares = Array.prototype.concat(
  [],
  [thunk, routerMiddleware(history)],
  !isProduction ? logger : []
);

const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f)
);

// Render it to DOM
ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

export function getStore() {
  return store;
}
