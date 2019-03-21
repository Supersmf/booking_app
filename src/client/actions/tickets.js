import { createAction } from 'redux-actions';
import { ADD_TICKET } from '../constants';


// eslint-disable-next-line import/prefer-default-export
export const addTickets = createAction(ADD_TICKET);
