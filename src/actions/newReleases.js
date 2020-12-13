import { FETCH_NEW_RELEASE } from './actionTypes';

export const getNewRelease = (newRelease) => {
  return {
    type: FETCH_NEW_RELEASE,
    newRelease,
  };
};
