import { FETCH_USER_ADDRESSES, ADD_ADDRESS } from './actionTypes';
import {
  addAddress,
  fetchUserAddresses,
  deleteAddress,
  makeAddressPrimary,
} from '../services/user';
import { logError } from './error';

export const getUserAddresses = (userAddresses) => {
  return {
    type: FETCH_USER_ADDRESSES,
    userAddresses,
  };
};

export const newAddress = (address) => {
  return {
    type: ADD_ADDRESS,
    address,
  };
};

export const handleNewAddress = (address) => {
  return async (dispatch) => {
    try {
      const response = await addAddress(address);
      if (response.response_status === 200) {
        const newlyCreatedAddress = await fetchUserAddresses(address.user_id);
        return dispatch(getUserAddresses(newlyCreatedAddress));
      }
      return dispatch(logError('Failed to Add address'));
    } catch (error) {
      return dispatch(logError('Failed to Add address'));
    }
  };
};

export const handleDeleteAddress = (addressId, userId) => {
  return async (dispatch) => {
    try {
      const response = await deleteAddress(addressId);
      if (response.response_status === 200) {
        const newlyCreatedAddress = await fetchUserAddresses(userId);
        return dispatch(getUserAddresses(newlyCreatedAddress));
      }
      return dispatch(logError('Failed to remove address'));
    } catch (error) {
      return dispatch(logError('Failed to remove address'));
    }
  };
};

export const handlePrimaryAddress = (addressId, userId) => {
  return async (dispatch) => {
    try {
      const response = await makeAddressPrimary(addressId, userId);
      if (response.response_status === 200) {
        const newlyCreatedAddress = await fetchUserAddresses(userId);
        return dispatch(getUserAddresses(newlyCreatedAddress));
      }
      return dispatch(logError('Failed to make address primary'));
    } catch (error) {
      return dispatch(logError('Failed to make address primary'));
    }
  };
};
