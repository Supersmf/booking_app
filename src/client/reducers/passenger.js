import { handleActions } from 'redux-actions';
import {
  ADD_PASSENGER, ADD_PASSENGER_INFO,
  // CONFIRM_CUSTOMER_REQUEST,
  // CONFIRM_CUSTOMER_SUCCESS, CONFIRM_CUSTOMER_FAILURE,
} from '../constants';

const initialState = [];

const handleAddPassenger = (state, { payload }) => payload;
const handleAddPassengerInfo = state => state;

const tours = handleActions({
  [ADD_PASSENGER]: handleAddPassenger,
  [ADD_PASSENGER_INFO]: handleAddPassengerInfo,
  // [CONFIRM_CUSTOMER_REQUEST]: handleAddPassengerInfo,
  // [CONFIRM_CUSTOMER_SUCCESS]: handleAddPassengerInfo,
  // [CONFIRM_CUSTOMER_FAILURE]: handleAddPassengerInfo,
},
initialState);

export default tours;
