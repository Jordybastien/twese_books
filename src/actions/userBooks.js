import { FETCH_USER_BOOKS } from './actionTypes';

export const getUserBooks = (userBooks) => {
  return {
    type: FETCH_USER_BOOKS,
    userBooks,
  };
};
