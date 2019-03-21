import { createAction } from 'redux-actions';
import {
  ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK,
  ADD_COUNTRY, CLEAR_TICKET,
} from '../constants';

export const addSearchData = createAction(ADD_SEARCH_DATA);
export const addAdvantagesLinks = createAction(ADD_ADVANTAGES_LINK);
export const addCountry = createAction(ADD_COUNTRY);
export const clearTicket = createAction(CLEAR_TICKET);
