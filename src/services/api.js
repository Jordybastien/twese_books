import axios from 'axios';
import { getToken } from '../utils/storage';

export const baseURL = 'https://twese.co/api/v1/user/';

const apiCall = axios.create({
  baseURL,
});

const setJwt = async () =>
  (apiCall.defaults.headers.common.Authorization = `Bearer ${await getToken()}`);

export default {
  get: apiCall.get,
  post: apiCall.post,
  put: apiCall.put,
  patch: apiCall.patch,
  delete: apiCall.delete,
  setJwt,
};
