import { FETCH_VENDOR_DETAILS } from '../actions/actionTypes';

export default function vendorDetails(state = {}, action) {
  switch (action.type) {
    case FETCH_VENDOR_DETAILS:
      return {
        ...state,
        ...action.vendorDetails,
      };
    default:
      return state;
  }
}
