import { FETCH_POPULAR_BOOKS } from '../actions/actionTypes';

export default function popularBooks(state = {}, action) {
  switch (action.type) {
    case FETCH_POPULAR_BOOKS:
      return {
        ...state,
        ...action.popularBooks,
      };
    default:
      return state;
  }
}
