import { handleActions } from 'redux-actions';
import { ADD_TICKET, CLEAR_TICKET } from '../constants';

const initialState = [];

const handleAddTicket = (state, {
  payload: {
    id, from, to, startTime, endTime, flight, price,
  },
}) => ([
  ...state, {
    id, from, to, startTime, endTime, flight, price,
  },
]);

const handleClearTicket = () => initialState;

const ticket = handleActions({
  [ADD_TICKET]: handleAddTicket,
  [CLEAR_TICKET]: handleClearTicket,
},
initialState);

export default ticket;
