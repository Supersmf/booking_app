import { createAction } from 'redux-actions';
import { ADD_TICKET, CLEAR_TICKET } from '../constants';

export const addTickets = createAction(ADD_TICKET);
export const clearTicket = createAction(CLEAR_TICKET);
