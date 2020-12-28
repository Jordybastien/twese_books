import { FETCH_COUNTRIES } from '../actions/actionTypes';

export default function countries(state = {}, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        ...action.countries,
      };
    default:
      return state;
  }
}
