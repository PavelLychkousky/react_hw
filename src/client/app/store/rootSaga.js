import { all } from 'redux-saga/effects';

import { saga as moviesSaga } from '../pages/SearchPage/data/SearchPageActions';

export default function* rootSaga() {
  yield all([
    moviesSaga()
  ]);
}