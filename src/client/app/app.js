import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux';

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import configureStore from './store/store';
import styles from './app.less';

const store = configureStore({});

var App = React.createClass({
  render: function () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={SearchPage}
            />
            <Route
              path="/search/:searchQuery?"
              component={SearchPage}
            />
            <Route
              exact
              path="/film/:title"
              component={DetailsPage}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);