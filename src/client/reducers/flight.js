import { handleActions } from 'redux-actions';
import { ADD_FLIGHT_SUCCESS } from '../constants';

const initialState = [];

const handleAddFight = (state, { payload }) => payload.data;

const flight = handleActions({
  [ADD_FLIGHT_SUCCESS]: handleAddFight,
},
initialState);

export default flight;
