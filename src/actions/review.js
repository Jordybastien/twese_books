import { ADD_REVIEW } from './actionTypes';
import { addReview } from '../services/review';
import { handleInitialData } from './initialData';

const addingReview = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

export const handleAddReview = (review) => {
  return async (dispatch) => {
    try {
      const response = await addReview(review);
      if (response.response_status === 200) {
        return dispatch(addingReview(response));
      }
      return dispatch(logError('Failed to add review'));
    } catch (error) {
      return dispatch(logError('Failed to add review'));
    }
  };
};
