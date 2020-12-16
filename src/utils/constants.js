export const ImageLink = 'http://157.230.237.163/GenreIcon/';
export const BookCover = 'http://157.230.237.163/BookCover/';
export const UserProfile = 'http://157.230.237.163/UserProfile/';

export const colorsPool = [
  '#fed6e0',
  '#c3fdbc',
  '#c6e1ff',
  '#ffedbd',
  '#bcf7ff',
  '#fed6e0',
  '#c3fdbc',
  '#c6e1ff',
  '#ffedbd',
  '#bcf7ff',
  '#fed6e0',
  '#c3fdbc',
  '#c6e1ff',
  '#ffedbd',
  '#bcf7ff',
];
export const selectColor = () => {
  const item = colorsPool[Math.floor(Math.random() * colorsPool.length)];
  return item;
};
