import { FETCH_COUNTRIES } from './actionTypes';

export const getCountries = (countries) => {
  return {
    type: FETCH_COUNTRIES,
    countries,
  };
};
