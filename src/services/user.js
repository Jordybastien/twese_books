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
  return res.data.Address;
};

export const addAddress = async (address) => {
  const res = await api.post('/AddAddress', address);
  return res.data;
};

export const deleteAddress = async (addresId) => {
  const res = await api.post('/removeAddress', { id: addresId });
  return res.data;
};

export const makeAddressPrimary = async (addresId, userId) => {
  const res = await api.post('/MakePrimary', { id: addresId, user_id: userId });
  return res.data;
};

export const updateSuccessfulPayment = async (paymentInfo) => {
  const res = await api.post('/SuccessfulPaymentMobile', paymentInfo);
  return res.data;
};
