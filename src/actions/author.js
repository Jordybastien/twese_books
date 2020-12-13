import { FETCH_AUTHOR } from './actionTypes';
import { showLoading, hideLoading } from './loading';
import { fetchAuthor } from '../services/book';

export const getAuthor = (author) => {
  return {
    type: FETCH_AUTHOR,
    author,
  };
};

export const handleFetchAuthorInfo = (authorId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    return fetchAuthor(authorId)
      .then((author) => {
        dispatch(getAuthor(author));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
