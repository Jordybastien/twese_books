import { SEARCH_RESULTS } from '../actions/actionTypes';

export default function searchResults(state = {}, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        ...action.searchResults,
      };
    default:
      return state;
  }
}
