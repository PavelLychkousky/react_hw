import {fetchMoviesByTitle} from '../../../api/api';
import {SORTS, SOURCE, SEARCH_ACTIONS} from './consts';

export function searchMovies (query, sortBy) {
  if (query) {
    return (dispatch) => {
      dispatch({
        type: SEARCH_ACTIONS.SEARCH_MOVIE_REQUEST,
        payload: query
      });

      fetchMoviesByTitle(query)
        .then((movies) => {
          dispatch({
            type: SEARCH_ACTIONS.SEARCH_MOVIE_SUCCESS,
            payload: sortMovies(movies, sortBy)
          })
        })
        .catch(() => {
          dispatch({
            type: SEARCH_ACTIONS.SEARCH_MOVIE_ERROR,
            payload: []
          });
        });
    }
  }
  return {
    type: SEARCH_ACTIONS.SEARCH_MOVIE_SUCCESS,
    payload: []
  };
}

export function changeSort (sort) {
  return {
    type: SEARCH_ACTIONS.SET_SORT_OPTION,
    payload: sort
  };
}

export function sort (movies, sortBy) {
  return {
    type: SEARCH_ACTIONS.SORT_MOVIES,
    payload: sortMovies(movies, sortBy)
  };
}

export function changeSource (source) {
  return {
    type: SEARCH_ACTIONS.SET_SOURCE_OPTION,
    payload: source
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