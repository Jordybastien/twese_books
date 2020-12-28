import { FETCH_USER_ADDRESSES } from './actionTypes';

export const getUserAddresses = (userAddresses) => {
  return {
    type: FETCH_USER_ADDRESSES,
    userAddresses,
  };
};
