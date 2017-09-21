import React from 'react';

import styles from './MovieList.less';
import Movie from '../Movie'

function MovieList (props) {
  const movies = props.movies.map((movie) =>
      <Movie
        key={movie.id}
        movie={movie}
      />
    );

  return <div>{movies}</div>
}

export default MovieList;