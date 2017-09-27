import React from 'react';

function MovieInfo (props) {
  var movie = props.movie;

  function goToMovie () {
    props.history.push('/film/' + movie.title);
  }
  return (
    <div className="movie-info">
      <div className="title" onClick={goToMovie}>{movie.title}</div>
      <div className="genre">{movie.genre}</div>
      <div className="year">{movie.releaseYear}</div>
    </div>
  );
}

export default MovieInfo;