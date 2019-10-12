import { Middleware, applyMiddleware, compose, createStore } from 'redux';

import freeze from 'redux-freeze';
import { reducers } from './app.reducer';
import thunk from 'redux-thunk';

export const configureStore = () => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [thunk, freeze] : [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(reducers, enhancer);

  return store;
};
