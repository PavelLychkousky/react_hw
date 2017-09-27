import React from 'react';

import styles from './SearchResults.less';
import MovieList from '../../../components/MovieList'

function SearchResults(props) {
  return (
    <div className="search-results">
      <MovieList
        movies={props.movies}
        history={props.history}
      />
    </div>
  );
}

export default SearchResults;