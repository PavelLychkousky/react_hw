export const SORTS = [
  {value: 'rating', title: 'rating'},
  {value: 'releaseYear', title: 'release year'}
];

export const SOURCES = [
  {value: 'title', title: 'title'},
  {value: 'director', title: 'director'}
];

export const SEARCH_ACTIONS = {
  SEARCH_MOVIE_REQUEST: 'SEARCH_MOVIE_REQUEST',
  SEARCH_MOVIE_SUCCESS: 'SEARCH_MOVIE_SUCCESS',
  SET_SORT_OPTION: 'SET_SORT_OPTION',
  SORT_MOVIES: 'SORT_MOVIES',
  SET_SOURCE_OPTION: 'SET_SOURCE_OPTION',
  SEARCH_MOVIE_ERROR: 'SEARCH_MOVIE_ERROR'
};

export const SEARCH_URL = '/search/';