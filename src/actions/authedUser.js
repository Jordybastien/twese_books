import {
  SET_AUTHED_USER,
  LOGOUT_USER,
  UPDATE_USER,
  NEW_USER_SIGNUP,
} from './actionTypes';
import {
  loginUser,
  updateUserInfo,
  fetchUserInfo,
  signupUser,
} from '../services/auth';
import { logError } from './error';
import { setToken, setUserInfo } from '../utils/storage';

export const setAuthedUser = (user) => {
  return {
    type: SET_AUTHED_USER,
    user,
  };
};

export const createUser = (user) => {
  return {
    type: NEW_USER_SIGNUP,
    user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const updateUser = (userDetails) => {
  return {
    type: UPDATE_USER,
    userDetails,
  };
};

export const handleUserLogin = (user) => {
  return async (dispatch) => {
    try {
      const response = await loginUser(user);
      if (response.response_status === 200) {
        setToken(response.access_token);
        setUserInfo(response.user);
        return dispatch(setAuthedUser(response.user));
      }
      return dispatch(logError('Email or Password mismatch'));
    } catch (error) {
      return dispatch(logError('Email or Password mismatch'));
    }
  };
};

export const handleUserUpdate = (userDetails) => {
  return async (dispatch) => {
    try {
      const response = await updateUserInfo(userDetails);
      if (response.response_status === 200) {
        const userInfo = await fetchUserInfo(userDetails.user_id);
        dispatch(setAuthedUser(userInfo.user_info[0]));
        setUserInfo(userInfo.user_info[0]);
        return dispatch(updateUser(userDetails));
      }
      return dispatch(logError('Failed to update user details'));
    } catch (error) {
      return dispatch(logError('Failed to update user details'));
    }
  };
};

export const handleNewUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await signupUser(user);
      if (response.response_status === 200) return dispatch(createUser(user));
      return dispatch(logError('Failed to update user details'));
    } catch (error) {
      return dispatch(logError('Failed to update user details'));
    }
  };
};
