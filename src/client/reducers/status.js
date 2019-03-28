import { handleActions } from 'redux-actions';
import {
  ADD_FLIGHTS_REQUEST, ADD_FLIGHT_SUCCESS,
  ADD_FLIGHT_FAILURE, CONFIRM_CUSTOMER_REQUEST,
  CONFIRM_CUSTOMER_SUCCESS, CONFIRM_CUSTOMER_FAILURE,
} from '../constants';

const initialState = {
  isFlightsFetching: false,
  flightsFetchError: null,
  isConfirmCustomerInfoStart: false,
  ConfirmCustomerInfoError: null,
};

const handleAddFlightRequest = (state) => {
  const res = { ...state };
  res.isFlightsFetching = true;
  return res;
};

const handleAddFlightSuccess = (state) => {
  const res = { ...state };
  res.isFlightsFetching = false;
  return res;
};

const handleAddFlightFailure = (state, { payload }) => {
  const res = { ...state };
  res.flightsFetchError = payload;
  return res;
};

const handleAddPassengerInfoRequest = (state) => {
  const res = { ...state };
  res.isConfirmCustomerInfoStart = true;
  return res;
};

const handleAddPassengerInfoSuccess = (state) => {
  const res = { ...state };
  res.isConfirmCustomerInfoStart = false;
  return res;
};
const handleAddPassengerInfoFailure = (state, { payload }) => {
  const res = { ...state };
  res.ConfirmCustomerInfoError = payload;
  return res;
};

const status = handleActions({
  [ADD_FLIGHTS_REQUEST]: handleAddFlightRequest,
  [ADD_FLIGHT_SUCCESS]: handleAddFlightSuccess,
  [ADD_FLIGHT_FAILURE]: handleAddFlightFailure,
  [CONFIRM_CUSTOMER_REQUEST]: handleAddPassengerInfoRequest,
  [CONFIRM_CUSTOMER_SUCCESS]: handleAddPassengerInfoSuccess,
  [CONFIRM_CUSTOMER_FAILURE]: handleAddPassengerInfoFailure,
},
initialState);

export default status;
