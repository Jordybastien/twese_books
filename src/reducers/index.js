import { combineReducers } from 'redux';
import loading from './loading';
import error from './error';
import author from './author';
import bookCategories from './bookCategories';
import bookInfo from './bookInfo';
import genreBooks from './genreBooks';
import newRelease from './newReleases';
import popularBooks from './popularBooks';
import authedUser from './authedUser';
import dashboardStats from './dashboardStats';

export default combineReducers({
  loading,
  error,
  author,
  bookCategories,
  bookInfo,
  genreBooks,
  newRelease,
  popularBooks,
  authedUser,
  dashboardStats,
});
