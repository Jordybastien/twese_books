import api from './api';

export const addReview = async (review) => {
  const res = await api.post('/AddReview', review);
  return res.data;
};
