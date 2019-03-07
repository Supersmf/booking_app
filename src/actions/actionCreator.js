import { createAction } from 'redux-actions';
import { ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK, ADD_COUNTRY } from '../constants';

const addSearchData = createAction(
  ADD_SEARCH_DATA,
  ({
    from, to, departDate, returnDate, adults, children, infant,
  }) => ({
    from,
    to,
    departDate,
    returnDate,
    adults,
    children,
    infant,
  }),
);

const addAdvantagesLinks = createAction(
  ADD_ADVANTAGES_LINK,
  ({ id, text, href }) => ({ id, text, href }),
);

const addCountry = createAction(
  ADD_COUNTRY,
  () => ({}),
);

export {
  addSearchData,
  addAdvantagesLinks,
  addCountry,
};
