import { hideLoading, showLoading } from './loading';
import { getBookCategories } from './bookCategories';
import { getNewRelease } from './newReleases';
import { getPopularBooks } from './popularBooks';

import {
  fetchBooksCategories,
  fetchNewRelease,
  fetchPopularBooks,
} from '../services/book';

import { fetchDashboardStats } from '../services/auth';
import { getDashboardStats } from './dashboardStats';
import { fetchCountries } from '../services/country';
import { getCountries } from './countries';
import {
  fetchUserAddresses,
  fetchUserBooks,
  fetchUserOrders,
} from '../services/user';
import { getUserAddresses } from './userAddresses';
import { getUserOrders } from './userOrders';
import { getUserBooks } from './userBooks';

const getInitialData = async () => {
  const [
    bookCategories,
    newRelease,
    popularBooks,
    countries,
  ] = await Promise.all([
    fetchBooksCategories(),
    fetchNewRelease(),
    fetchPopularBooks(),
    fetchCountries(),
  ]);

  return {
    bookCategories,
    newRelease,
    popularBooks,
    countries,
  };
};

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    return getInitialData()
      .then(({ bookCategories, newRelease, popularBooks, countries }) => {
        dispatch(getBookCategories(bookCategories));
        dispatch(getNewRelease(newRelease));
        dispatch(getPopularBooks(popularBooks));
        dispatch(getCountries(countries));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};

const getAuthedData = async (userId) => {
  const [
    dashboardStats,
    userAddresses,
    userBooks,
    userOrders,
  ] = await Promise.all([
    fetchDashboardStats(userId),
    fetchUserAddresses(userId),
    fetchUserBooks(userId),
    fetchUserOrders(userId),
  ]);

  return {
    dashboardStats,
    userAddresses,
    userBooks,
    userOrders,
  };
};

export const handleAuthedData = (userId) => {
  return async (dispatch) => {
    dispatch(showLoading());

    return getAuthedData(userId)
      .then(({ dashboardStats, userAddresses, userBooks, userOrders }) => {
        dispatch(getDashboardStats(dashboardStats));
        dispatch(getUserAddresses(userAddresses));
        dispatch(getUserBooks(userBooks));
        dispatch(getUserOrders(userOrders));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
