import React from 'react';

import styles from './MovieDetails.less';
import Logo from '../Logo'
import Button from '../Button'

function MovieDetails(props) {
  return (
  <div className="movie-details">
    <Logo />
    <Button title="search" onClick={() => props.history.push('/search')}/>
    <div className="picture">
      <img src={props.movie.coverUri} />
    </div>
    <div className="movie-description">
      <div className="title">{props.movie.title}</div>
      <div className="rating">{props.movie.rating}</div><br/>
      <div className="year">{props.movie.releaseYear}</div>
      <div className="duration">{props.movie.duration} min</div><br/>
      <div className="description">{props.movie.description}</div><br/>
      <div className="director">Director: {props.movie.director}</div><br/>
      <div className="cast">Cast: Actor 1, Actor 2, Actor 3, Actor 4, Actor 5, Actor 6, Actor 7</div>
    </div>
  </div>
  );
}

export default MovieDetails;