import React from 'react';

import styles from './Movie.less';
import MovieInfo from './MovieInfo';

function Movie (props) {
  var movie = props.movie;
  return (
    <div className="movie" id={movie.id}>
      <img />
      <MovieInfo movie={movie} history={props.history}/>
    </div>
  );
}

export default Movie;