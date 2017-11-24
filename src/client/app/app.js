import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import 'isomorphic-fetch';

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';


var App = React.createClass({
  render: function () {
    return (
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
    );
  }
});

export default App;