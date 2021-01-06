import { FETCH_USER_ADDRESSES, DELETE_ADDRESS } from '../actions/actionTypes';

export default function userAddresses(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_ADDRESSES:
      return {
        ...state,
        ...action.userAddresses,
      };

    case DELETE_ADDRESS:
      const newAddresses = Object.values(state).filter(
        (el) => el.id !== action.addressId
      );
      return {
        ...newAddresses,
      };
      return {};
    default:
      return state;
  }
}
