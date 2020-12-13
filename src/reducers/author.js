import { FETCH_AUTHOR } from '../actions/actionTypes';

export default function author(state = {}, action) {
  switch (action.type) {
    case FETCH_AUTHOR:
      return {
        ...state,
        ...action.author,
      };
    default:
      return state;
  }
}
