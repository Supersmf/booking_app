import { handleActions } from 'redux-actions';
import { ADD_LUGGAGE } from '../constants';

const initialState = [{
  name: '',
  weight: undefined,
}];

const handleAddTicket = (state, { payload }) => payload;

const ticket = handleActions({
  [ADD_LUGGAGE]: handleAddTicket,
},
initialState);

export default ticket;
