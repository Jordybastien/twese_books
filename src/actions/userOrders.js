import { FETCH_USER_ORDERS } from './actionTypes';

export const getUserOrders = (userOrders) => {
  return {
    type: FETCH_USER_ORDERS,
    userOrders,
  };
};
