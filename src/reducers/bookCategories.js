import { FETCH_BOOKS_CATEGORIES } from '../actions/actionTypes';

export default function bookCategories(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOKS_CATEGORIES:
      return {
        ...state,
        ...action.bookCategories,
      };
    default:
      return state;
  }
}
