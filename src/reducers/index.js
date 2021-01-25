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
import countries from './countries';
import userOrders from './userOrders';
import userBooks from './userBooks';
import userAddresses from './userAddresses';
import allAuthors from './allAuthors';
import allBooks from './allBooks';
import searchResults from './searchResult';
import vendorDetails from './vendorDetails';
import paymentLink from './paymentLink';

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
  countries,
  userOrders,
  userBooks,
  userAddresses,
  allAuthors,
  allBooks,
  searchResults,
  vendorDetails,
  paymentLink,
});
