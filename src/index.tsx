import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import App from './components/App';
import { configureStore } from './store/configureStore';

import './styles/index.scss';

const store = configureStore();

library.add(fab, fas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
