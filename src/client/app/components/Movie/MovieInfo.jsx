import React from 'react';

function MovieInfo (props) {
  var movie = props.movie;
  return (
    <div className="movie-info">
      <div className="title">{movie.title}</div>
      <div className="genre">{movie.genre}</div>
      <div className="year">{movie.releaseYear}</div>
    </div>
  );
}

export default MovieInfo;