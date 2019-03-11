import { createAction } from 'redux-actions';
import {
  ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK, ADD_COUNTRY, ADD_TOUR, ADD_FLIGHT,
} from '../constants';

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

const addTour = createAction(
  ADD_TOUR,
  () => ({}),
);

const addFlight = createAction(
  ADD_FLIGHT,
  () => ({}),
);

export {
  addSearchData,
  addAdvantagesLinks,
  addCountry,
  addTour,
  addFlight,
};
