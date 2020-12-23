import { SET_AUTHED_USER, LOGOUT_USER } from './actionTypes';
import { loginUser } from '../services/auth';
import { logError } from './error';
import { setToken, setUserInfo } from '../utils/storage';

export const setAuthedUser = (user) => {
  return {
    type: SET_AUTHED_USER,
    user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const handleUserLogin = (user) => {
  return async (dispatch) => {
    try {
      const response = await loginUser(user);
      setToken(response.access_token);
      setUserInfo(response.user);
      dispatch(setAuthedUser(response.user));
      return true;
    } catch (error) {
      return dispatch(logError('Email or Password mismatch'));
    }
  };
};
