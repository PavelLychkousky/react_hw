import SearchPageReducer from '../../src/client/app/pages/SearchPage/data/SearchPageReducer';
import {SEARCH_ACTIONS} from '../../src/client/app/pages/SearchPage/data/consts'

it('should return default state', () => {
  expect(SearchPageReducer(undefined, {})).toEqual(
    {
      "movies": [],
      "query": "",
      "sortBy": "rating",
      "source": "title"
    }
  );
});

it('should handle SET_SORT_OPTION', () => {
  expect(SearchPageReducer({}, {type: SEARCH_ACTIONS.SET_SORT_OPTION, payload: 'value'})).toEqual(
    {
      "sortBy": "value"
    }
  );
});

it('should handle SET_MOVIE_SUCCESS', () => {
  expect(SearchPageReducer({}, {type: SEARCH_ACTIONS.SEARCH_MOVIE_SUCCESS, payload: [{}, {}]})).toEqual(
    {
      "movies": [{}, {}]
    }
  );
});