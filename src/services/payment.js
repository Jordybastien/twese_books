import axios from 'axios';

export const flutterWavePayment = async (paymentDetails, secretKey) => {
  axios.defaults.headers.common.Authorization = `Bearer ${secretKey}`;
  const res = await axios.post(
    'https://api.flutterwave.com/v3/payments',
    paymentDetails
  );
  return res.data;
};

