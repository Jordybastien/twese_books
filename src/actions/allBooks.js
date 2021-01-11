import { FETCH_ALL_BOOKS } from './actionTypes';

export const getAllBooks = (allBooks) => {
  return {
    type: FETCH_ALL_BOOKS,
    allBooks,
  };
};
