import { FETCH_POPULAR_BOOKS } from './actionTypes';

export const getPopularBooks = (popularBooks) => {
  return {
    type: FETCH_POPULAR_BOOKS,
    popularBooks,
  };
};
