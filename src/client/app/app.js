import React from 'react';
import ReactDOM from 'react-dom';

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import styles from './app.less';

var App = React.createClass({
  render: function () {
    return (
      <SearchPage />
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);