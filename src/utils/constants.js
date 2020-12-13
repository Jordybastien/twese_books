export const ImageLink = 'http://157.230.237.163/GenreIcon/';
export const BookCover = 'http://157.230.237.163/BookCover/';
export const UserProfile = 'http://157.230.237.163/UserProfile/';

export const colorsPool = ['#CB0162', '#0F9B8E', 'maroon', '#02066F'];

export const selectColor = () => {
  const item = colorsPool[Math.floor(Math.random() * colorsPool.length)];
  return item;
};
