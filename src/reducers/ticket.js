import { handleActions } from 'redux-actions';
import { ADD_TICKET, CLEAR_TICKET } from '../constants';

const initialState = [];

const onAddTicket = (state, {
  payload: {
    id, from, to, startTime, endTime, flight, price,
  },
}) => ([
  ...state, {
    id, from, to, startTime, endTime, flight, price,
  },
]);

const clearTicket = () => initialState;

const ticket = handleActions(
  {
    [ADD_TICKET]: onAddTicket,
    [CLEAR_TICKET]: clearTicket,
  },
  initialState,
);

export default ticket;
