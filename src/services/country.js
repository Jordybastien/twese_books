import api from './api';

export const fetchCountries = async () => {
  const res = await api.get('/Country');
  return res.data;
};
