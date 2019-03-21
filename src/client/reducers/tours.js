import { handleActions } from 'redux-actions';
import { ADD_TOUR_SUCCESS } from '../constants';

const initialState = [];

const handleAddTour = (state, { payload }) => payload.data;

const tours = handleActions({
  [ADD_TOUR_SUCCESS]: handleAddTour,
},
initialState);

export default tours;
