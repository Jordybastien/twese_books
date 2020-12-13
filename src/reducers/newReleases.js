import { FETCH_NEW_RELEASE } from '../actions/actionTypes';

export default function newRelease(state = {}, action) {
  switch (action.type) {
    case FETCH_NEW_RELEASE:
      return {
        ...state,
        ...action.newRelease,
      };
    default:
      return state;
  }
}
