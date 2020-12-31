export const ImageLink = 'http://157.230.237.163/GenreIcon/';
export const BookCover = 'http://157.230.237.163/BookCover/';
export const UserProfile = 'http://157.230.237.163/UserProfile/';
export const ReadBookLink = 'http://157.230.237.163/BookFile/';

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

export const genders = [
  { id: 'male', name: 'Male' },
  { id: 'female', name: 'Female' },
  { id: 'trans-man', name: 'Trans man' },
  { id: 'trans-woman', name: 'Trans woman' },
  { id: 'non-binary', name: 'Non binary' },
  { id: 'gender-fluid', name: 'Gender fluid' },
  { id: 'not-applicable', name: 'Not applicable' },
];
