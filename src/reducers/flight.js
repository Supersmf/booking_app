import { handleActions } from 'redux-actions';
import { ADD_FLIGHT } from '../constants';

const initialState = [];

const handleAddFight = (state, { payload }) => payload;

const flight = handleActions({
  [ADD_FLIGHT]: handleAddFight,
},
initialState);

export default flight;
