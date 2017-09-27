import React from 'react';

import styles from './DetailsPage.less'
import Page from '../../components/Page'
import MovieList from '../../components/MovieList'
import MovieDetails from '../../components/MovieDetails'
import movies from '../../test-data/dataMovies'

function DetailsPage (props) {
  const title = props.match.params.title || '';
  if (title) {
    var movie = movies.filter((movie) => movie.title.toLowerCase() === title.toLowerCase());
    if (!movie.length) {
      props.history.replace('/search');
    } else {
      movie = movie[0];
    }
  }

  return (
    <Page>
      <MovieDetails movie={movie} history={props.history}/>
      <div className="movies-by">movies by Quentin Tarantino</div>
      <MovieList
        movies={movies}
      />
    </Page>
  );
}

export default DetailsPage;