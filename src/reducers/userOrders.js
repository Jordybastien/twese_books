import { FETCH_USER_ORDERS } from '../actions/actionTypes';

export default function userOrders(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_ORDERS:
      return {
        ...state,
        ...action.userOrders,
      };
    default:
      return state;
  }
}
