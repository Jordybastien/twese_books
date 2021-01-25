import api from './api';

api.setJwt();

export const fetchVendorDetails = async (paymentDetails) => {
  const res = await api.post('/MobilePaymentApi', paymentDetails);
  return res.data;
};
