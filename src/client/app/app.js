import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import styles from './app.less';

var App = React.createClass({
  render: function () {
    return (
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
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);