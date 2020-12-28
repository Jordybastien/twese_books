import { FETCH_USER_ADDRESSES } from '../actions/actionTypes';

export default function userAddresses(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_ADDRESSES:
      return {
        ...state,
        ...action.userAddresses,
      };
    default:
      return state;
  }
}
