import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';

import { reducer } from './app.reducer';
// import { StoreState } from './entity';

// export interface StoreConfiguration {
//   store: Store<StoreState>;
// }

// TODO: move to custom.d.ts
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (...args: any[]) => () => any;
  }
}

export const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [thunk, freeze] : [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // const reducer = appReducer();

  // const store = createStore(reducer, enhancer);
  const store = createStore(reducer, enhancer);

  return store;
};
