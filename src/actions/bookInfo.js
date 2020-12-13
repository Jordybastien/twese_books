import { FETCH_BOOK_INFO } from './actionTypes';
import { showLoading, hideLoading } from './loading';
import { fetchBookInfo } from '../services/book';

export const getBookInfo = (bookInfo) => {
  return {
    type: FETCH_BOOK_INFO,
    bookInfo,
  };
};

export const handleFetchBookInfo = (bookId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    return fetchBookInfo(bookId)
      .then((bookInfo) => {
        dispatch(getBookInfo(bookInfo));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
