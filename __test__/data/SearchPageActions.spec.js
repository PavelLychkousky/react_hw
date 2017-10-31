import * as actions from '../../src/client/app/pages/SearchPage/data/SearchPageActions';
import {SEARCH_ACTIONS} from '../../src/client/app/pages/SearchPage/data/consts'

it('should create action to change sorting', () => {
  expect(actions.changeSort('value')).toEqual(
    {
      type: SEARCH_ACTIONS.SET_SORT_OPTION,
      payload: 'value'
    }
  );
});

it('should create action to sort movies', () => {
  expect(actions.sort([{rating: 3}, {rating: 5}], 'rating')).toEqual(
    {
      type: SEARCH_ACTIONS.SORT_MOVIES,
      payload: [{rating: 5}, {rating: 3}]
    }
  );
});
