import { DETAILS_ACTIONS } from './consts'

const initialState = {
  movie: {}
};

export default function DetailsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DETAILS_ACTIONS.GET_MOVIE_SUCCESS:
      return { ...state, movie: action.payload };

    case DETAILS_ACTIONS.GET_MOVIE_ERROR:
      return { ...state, movie: action.payload };

    default:
      return state;
  }
}