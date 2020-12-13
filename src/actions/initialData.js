import { hideLoading, showLoading } from './loading';
import { getBookCategories } from './bookCategories';
import { getNewRelease } from './newReleases';
import { getPopularBooks } from './popularBooks';

import {
  fetchBooksCategories,
  fetchNewRelease,
  fetchPopularBooks,
} from '../services/book';

const getInitialData = async () => {
  const [bookCategories, newRelease, popularBooks] = await Promise.all([
    fetchBooksCategories(),
    fetchNewRelease(),
    fetchPopularBooks(),
  ]);

  return {
    bookCategories,
    newRelease,
    popularBooks,
  };
};

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    return getInitialData()
      .then(({ bookCategories, newRelease, popularBooks }) => {
        dispatch(getBookCategories(bookCategories));
        dispatch(getNewRelease(newRelease));
        dispatch(getPopularBooks(popularBooks));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
