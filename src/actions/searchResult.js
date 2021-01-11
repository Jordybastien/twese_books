import { SEARCH_RESULTS } from './actionTypes';

export const getSearchResults = (searchResults) => {
  return {
    type: SEARCH_RESULTS,
    searchResults,
  };
};
