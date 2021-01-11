import api, { baseURL } from './api';

export const fetchGenreBooks = async (bookId) => {
  const res = await api.post('/GenreBooks', { id: bookId });
  return res.data;
};

export const fetchBooksCategories = async () => {
  const res = await api.get('/FeaturedCategories');
  return res.data;
};

export const fetchNewRelease = async () => {
  const res = await api.get('/NewRelease');
  return res.data;
};

export const fetchPopularBooks = async () => {
  const res = await api.get('/PopularBooks');
  return res.data;
};

export const fetchBookInfo = async (bookId) => {
  const res = await api.post('/BookMore', { id: bookId });
  return res.data;
};

export const fetchAuthor = async (authorId) => {
  const res = await api.post('/AuthorProfile', { id: authorId });
  return res.data;
};

export const fetchAllAuthors = async () => {
  const res = await api.get('/Authors');
  return res.data;
};

export const fetchAllBooks = async () => {
  const res = await api.get('/AllBooks');
  return res.data;
};
