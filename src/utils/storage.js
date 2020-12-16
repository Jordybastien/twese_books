import { AsyncStorage } from 'react-native';
import _ from 'lodash';

const CART_KEY = 'TWESE_APP:CART_KEY';

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
