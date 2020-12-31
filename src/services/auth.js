import api from './api';
import { getToken, getUserInfo } from '../utils/storage';
import jwtDecode from 'jwt-decode';

api.setJwt();

export const loginUser = async (user) => {
  const res = await api.post('/login', user);
  return res.data;
};

export const updateUserInfo = async (user) => {
  const res = await api.post('/UpdateMyAccount', user);
  return res.data;
};

export const fetchUserInfo = async (userId) => {
  const res = await api.post('/MyAccount', { user_id: userId });
  return res.data;
};

export const fetchDashboardStats = async (userId) => {
  const res = await api.post('/MyAccountDashboard', { user_id: userId });
  return res.data;
};

export const checkToken = async () => {
  const token = await getToken();
  const user = await getUserInfo();
  if (token) {
    return { token, user };
  }
  return { token: null, user: null };
};

export const signupUser = async (user) => {
  const res = await api.post('/register', user);
  return res.data;
};
