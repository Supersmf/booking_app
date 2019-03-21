import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchTours = () => (
  axios('http://localhost:3000/tours')
);
