import { ADD_SEARCH_DATA } from '../constants/constants';

const addSearchData = ({
  from, to, departDate, returnDate, adults, children, infant,
}) => ({
  type: ADD_SEARCH_DATA,
  from,
  to,
  departDate,
  returnDate,
  adults,
  children,
  infant,
});

const addData = {};

export {
  addSearchData,
  addData,
};
