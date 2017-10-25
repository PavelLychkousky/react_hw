import {fetchMovie} from '../../../api/api';
import {DETAILS_ACTIONS} from './consts';

export function getMovie (id) {
  if (id) {
    return (dispatch) => {
      dispatch({
        type: DETAILS_ACTIONS.GET_MOVIE_REQUEST,
        payload: ''
      });

      fetchMovie(id)
        .then((movie) => {
          dispatch({
            type: DETAILS_ACTIONS.GET_MOVIE_SUCCESS,
            payload: movie
          })
        })
        .catch(() => {
          dispatch({
            type: DETAILS_ACTIONS.GET_MOVIE_ERROR,
            payload: {}
          })
        });
    }
  }
  return {
    type: DETAILS_ACTIONS.GET_MOVIE_SUCCESS,
    payload: {}
  };
}
