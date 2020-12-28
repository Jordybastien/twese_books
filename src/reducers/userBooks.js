import { FETCH_USER_BOOKS } from '../actions/actionTypes';

export default function userBooks(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_BOOKS:
      return {
        ...state,
        ...action.userBooks,
      };
    default:
      return state;
  }
}
