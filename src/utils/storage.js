import { AsyncStorage } from 'react-native';
import _ from 'lodash';

const CART_KEY = 'TWESE_APP:CART_KEY';
const TOKEN_KEY = 'TWESE_APP:TOKEN';
const USER_INFO_KEY = 'TWESE_APP:USER_INFO';

export const getCart = async () => {
  const cartItems = await AsyncStorage.getItem(CART_KEY);
  return JSON.parse(cartItems);
};

export const addToCart = async (book) => {
  const arr = [book];
  const cart = await getCart();
  const newCart = _.unionBy(arr, cart, 'id');
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(newCart));
  return true;
};

/**
 *
 * @param {*} newCart
 * @desc This function takes an array of already filtered cart
 */
export const removeBookFromCart = async (newCart) => {
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(newCart));
  return true;
};

export const setToken = (token) => {
  AsyncStorage.setItem(TOKEN_KEY, token);
  return true;
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
};

export const deleteToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  return true;
};

export const setUserInfo = (userInfo) => {
  AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
  return true;
};

export const getUserInfo = async () => {
  const userInfo = await AsyncStorage.getItem(USER_INFO_KEY);
  return JSON.parse(userInfo);
};

export const deleteUserInfo = async () => {
  await AsyncStorage.removeItem(USER_INFO_KEY);
  return true;
};
