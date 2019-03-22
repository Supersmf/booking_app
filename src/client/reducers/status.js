import { handleActions } from 'redux-actions';
import { ADD_FLIGHTS_REQUEST, ADD_FLIGHT_SUCCESS, ADD_FLIGHT_FAILURE } from '../constants';

const initialState = {
  isFlightsFetching: false,
  flightsFetchError: null,
};

const handleAddFlightRequest = ({ flightsFetchError }) => ({
  isFlightsFetching: true,
  flightsFetchError,
});

const handleAddFlightSuccess = ({ flightsFetchError }) => ({
  isFlightsFetching: false,
  flightsFetchError,
});

const handleAddFlightFailure = ({ isFlightsFetching }, { payload }) => ({
  isFlightsFetching,
  flightsFetchError: payload,
});

const status = handleActions({
  [ADD_FLIGHTS_REQUEST]: handleAddFlightRequest,
  [ADD_FLIGHT_SUCCESS]: handleAddFlightSuccess,
  [ADD_FLIGHT_FAILURE]: handleAddFlightFailure,
},
initialState);

export default status;
