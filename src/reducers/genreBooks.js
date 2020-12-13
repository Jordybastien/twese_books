import { FETCH_GENRE_BOOKS } from '../actions/actionTypes';

export default function genreBooks(state = {}, action) {
  switch (action.type) {
    case FETCH_GENRE_BOOKS:
      return {
        ...state,
        ...action.genreBooks,
      };
    default:
      return state;
  }
}
