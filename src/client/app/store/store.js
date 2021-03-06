import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
};