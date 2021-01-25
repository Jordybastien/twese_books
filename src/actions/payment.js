import { FETCH_VENDOR_DETAILS, FETCH_PAYMENT_LINK } from './actionTypes';
import { logError } from './error';
import { fetchVendorDetails } from '../services/vendorDetails';
import { flutterWavePayment } from '../services/payment';

export const getVendorDetails = (vendorDetails) => {
  return {
    type: FETCH_VENDOR_DETAILS,
    vendorDetails,
  };
};

export const getPaymentLink = (paymentLink) => {
  return {
    type: FETCH_PAYMENT_LINK,
    paymentLink,
  };
};

export const handleGetVendorDetails = (paymentBody) => {
  return async (dispatch) => {
    try {
      const vendorDetails = await fetchVendorDetails(paymentBody);
      if (vendorDetails.response_status === 200)
        return dispatch(getVendorDetails(vendorDetails));
      return dispatch(logError('Failed to fetch vendor details'));
    } catch (error) {
      return dispatch(logError('Failed to fetch vendor details'));
    }
  };
};

export const handlePayment = (paymentDetails, secretKey) => {
  return async (dispatch) => {
    try {
      const payment = await flutterWavePayment(paymentDetails, secretKey);
      if (payment.status === 'success') {
        return dispatch(getPaymentLink(payment.data.link));
      }
      return dispatch(logError('Failed to Connect to Payment Gateway'));
    } catch (error) {
      return dispatch(logError('Failed to trigger payment'));
    }
  };
};
