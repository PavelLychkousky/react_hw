import { call, put, all, takeLatest } from 'redux-saga/effects';
import {fetchMoviesByTitle} from '../../../api/api';
import {SORTS, SEARCH_ACTIONS} from './consts';

export const searchMovies = (query, sortBy) => ({
    type: SEARCH_ACTIONS.SEARCH_MOVIE_REQUEST,
    payload: query
  });

export const updateMovies = (movies, sortBy) => ({
    type: SEARCH_ACTIONS.SEARCH_MOVIE_SUCCESS,
    payload: sortMovies(movies, sortBy)
  });

// Sagas
function* searchMoviesAsync() {
  const movies = yield call(() => fetchMoviesByTitle(query));

  yield put(updateMovies(movies, sortBy));
}

export function* watchSearchMovies() {
  yield takeLatest(SEARCH_ACTIONS.SEARCH_MOVIE_REQUEST, searchMoviesAsync);
}

export function* changeSort (sort) {
  return {
    type: SEARCH_ACTIONS.SET_SORT_OPTION,
    payload: sort
  };
}

export function* sort (movies, sortBy) {
  return {
    type: SEARCH_ACTIONS.SORT_MOVIES,
    payload: sortMovies(movies, sortBy)
  };
}

function sortMovies (movies, sortBy) {
  if (movies && movies.length) {
    return movies.sort((movie1, movie2) => (
      sortBy === SORTS[0].value ? movie2.rating - movie1.rating : movie2.releaseYear - movie1.releaseYear
    ));
  }
  return [];
}

export function* saga() {
  yield all([
    watchSearchMovies()
  ]);
}
