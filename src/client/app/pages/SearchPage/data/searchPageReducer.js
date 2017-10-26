import {SORTS, SOURCES, SEARCH_ACTIONS} from './consts'

const initialState = {
  movies: [],
  sortBy: SORTS[0].value,
  query: '',
  source: SOURCES[0].value
};

export default function SearchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTIONS.SEARCH_MOVIE_REQUEST:
      return { ...state, query: action.payload };

    case SEARCH_ACTIONS.SEARCH_MOVIE_SUCCESS:
      return { ...state, movies: action.payload };

    case SEARCH_ACTIONS.SEARCH_MOVIE_ERROR:
      return { ...state, movies: action.payload };

    case SEARCH_ACTIONS.SET_SORT_OPTION:
      return { ...state, sortBy: action.payload };

    case SEARCH_ACTIONS.SET_SOURCE_OPTION:
      return { ...state, source: action.payload };

    case SEARCH_ACTIONS.SORT_MOVIES:
      return { ...state, movies: action.payload };

    default:
      return state;
  }
}