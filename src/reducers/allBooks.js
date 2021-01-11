import { FETCH_ALL_BOOKS } from '../actions/actionTypes';

export default function allBooks(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return {
        ...state,
        ...action.allBooks,
      };
    default:
      return state;
  }
}
