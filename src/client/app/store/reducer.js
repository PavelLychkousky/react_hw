import { combineReducers } from 'redux';

import SearchPageReducer from '../pages/SearchPage/data/SearchPageReducer';
import DetailsPageReducer from '../pages/DetailsPage/data/DetailsPageReducer';

const rootReducer = combineReducers({
  detailsPage: DetailsPageReducer,
  searchPage: SearchPageReducer
});

export default rootReducer;