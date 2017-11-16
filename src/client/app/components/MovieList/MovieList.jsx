import React from 'react';

import Movie from '../Movie'

function MovieList (props) {
  const movies = props.movies.map((movie) =>
      <Movie
        key={movie.id}
        movie={movie}
        history={props.history}
      />
    );

  return <div>{movies}</div>
}

export default MovieList;