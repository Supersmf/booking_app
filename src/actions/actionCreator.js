import { createAction } from 'redux-actions';
import {
  ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK,
  ADD_COUNTRY, ADD_TOUR, ADD_FLIGHT,
  ADD_TICKET, CLEAR_TICKET,
} from '../constants';

export const addSearchData = createAction(ADD_SEARCH_DATA);
export const addAdvantagesLinks = createAction(ADD_ADVANTAGES_LINK);
export const addCountry = createAction(ADD_COUNTRY);
export const addTour = createAction(ADD_TOUR);
export const addFlight = createAction(ADD_FLIGHT);
export const addTicket = createAction(ADD_TICKET);
export const clearTicket = createAction(CLEAR_TICKET);
