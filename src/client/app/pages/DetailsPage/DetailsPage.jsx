import React from 'react';

import styles from './DetailsPage.less'
import Page from '../../components/Page'
import MovieList from '../../components/MovieList'
import MovieDetails from '../../components/MovieDetails'
import movies from '../../test-data/dataMovies'
import movie from '../../test-data/dataMovie'

function DetailsPage () {
  return (
    <Page>
      <MovieDetails movie={movie}/>
      <div className="movies-by">movies by Quentin Tarantino</div>
      <MovieList
        movies={movies}
      />
    </Page>
  );
}

export default DetailsPage;