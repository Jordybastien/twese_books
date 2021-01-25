import { FETCH_PAYMENT_LINK } from '../actions/actionTypes';

export default function paymentLink(state = {}, action) {
  switch (action.type) {
    case FETCH_PAYMENT_LINK:
      return action.paymentLink;
    default:
      return state;
  }
}
