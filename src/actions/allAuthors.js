import { FETCH_ALL_AUTHORS } from './actionTypes';

export const getAllAuthors = (allAuthors) => {
  return {
    type: FETCH_ALL_AUTHORS,
    allAuthors,
  };
};
