import { FETCH_ALL_AUTHORS } from '../actions/actionTypes';

export default function allAuthors(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_AUTHORS:
      return {
        ...state,
        ...action.allAuthors,
      };
    default:
      return state;
  }
}
