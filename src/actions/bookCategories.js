import { FETCH_BOOKS_CATEGORIES } from './actionTypes';

export const getBookCategories = (bookCategories) => {
  return {
    type: FETCH_BOOKS_CATEGORIES,
    bookCategories,
  };
};


