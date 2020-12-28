import api from './api';

api.setJwt();

export const fetchUserOrders = async (userId) => {
  const res = await api.post('/MyOrders', { user_id: userId });
  return res.data;
};

export const fetchUserBooks = async (userId) => {
  const res = await api.post('/MyBooks', { user_id: userId });
  return res.data;
};

export const fetchUserAddresses = async (userId) => {
  const res = await api.post('/MyAddress', { user_id: userId });
  return res.data;
};
