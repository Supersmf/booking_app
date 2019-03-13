import { createActions } from 'redux-actions';
import {
  ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK,
  ADD_COUNTRY, ADD_TOUR, ADD_FLIGHT,
  ADD_TICKET, CLEAR_TICKET,
} from '../constants';

export const {
  addSearchData, addAdvantagesLinks, addCountry,
  addTour, addFlight, addTicket, clearTicket,
} = createActions(
  ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK, ADD_COUNTRY,
  ADD_TOUR, ADD_FLIGHT, ADD_TICKET, CLEAR_TICKET,
);
