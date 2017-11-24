import { all } from 'redux-saga/effects';

import { moviesSaga } from '../pages/SearchPage/data/SearchPageActions';
import { movieSaga } from '../pages/DetailsPage/data/DetailsPageActions';

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    movieSaga()
  ]);
}