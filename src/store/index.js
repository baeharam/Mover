// @flow

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/index';

export default function configureStore() {
  const middlewares = [];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  return store;
}
