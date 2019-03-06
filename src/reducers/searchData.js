import { ADD_SEARCH_DATA } from '../constants/constants';

const searchData = (state = [], {
  type, from, to, departDate, returnDate, adults, children, infant,
}) => {
  switch (type) {
    case ADD_SEARCH_DATA:
      return [{
        from,
        to,
        departDate,
        returnDate,
        adults,
        children,
        infant,
      },
      ];
    default: return state;
  }
};

export default searchData;
