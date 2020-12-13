import { FETCH_GENRE_BOOKS } from './actionTypes';
import { showLoading, hideLoading } from './loading';
import { fetchGenreBooks } from '../services/book';

export const getGenreBooks = (genreBooks) => {
  return {
    type: FETCH_GENRE_BOOKS,
    genreBooks,
  };
};

export const handleFetchCategoryBooks = (categoryId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    return fetchGenreBooks(categoryId)
      .then((genreBooks) => {
        dispatch(getGenreBooks(genreBooks));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
