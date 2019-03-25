import { handleActions } from 'redux-actions';
import { ADD_PASSENGER } from '../constants';

const initialState = [];

const handleAddTour = (state, { payload }) => payload;

const tours = handleActions({
  [ADD_PASSENGER]: handleAddTour,
},
initialState);

export default tours;
