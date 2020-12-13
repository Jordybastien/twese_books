import { FETCH_BOOK_INFO } from '../actions/actionTypes';

export default function bookInfo(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOK_INFO:
      return {
        ...state,
        ...action.bookInfo,
      };
    default:
      return state;
  }
}
