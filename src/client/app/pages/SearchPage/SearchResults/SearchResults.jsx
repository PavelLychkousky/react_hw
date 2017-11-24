import React from 'react';

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