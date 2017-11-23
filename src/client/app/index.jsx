import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './app';
import configureStore from './store/store';

// Grab the state from a global variable injected into the server-generated HTML
const store = configureStore(window.PRELOADED_STATE);
// Allow the passed state to be garbage-collected
delete window.PRELOADED_STATE;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
);