import { call, put, all, takeLatest } from 'redux-saga/effects';
import {fetchMovie} from '../../../api/api';
import {DETAILS_ACTIONS} from './consts';

export const getMovie = (id) => ({
  type: DETAILS_ACTIONS.GET_MOVIE_REQUEST,
  payload: {id}
});

export const updateMovie = (movie) => ({
  type: DETAILS_ACTIONS.GET_MOVIE_SUCCESS,
  payload: movie
});

// Sagas
function* getMovieAsync (action) {
  const movie = yield call(() => fetchMovie(action.payload.id));

  yield put(updateMovie(movie));
}

export function* watchGetMovie () {
  yield takeLatest(DETAILS_ACTIONS.GET_MOVIE_REQUEST, getMovieAsync);
}

export function* movieSaga () {
  yield all([
    watchGetMovie()
  ]);
}
