import { handleActions } from 'redux-actions';
import { STARTED_FETCH_FLIGHTS, FAILED_FETCH_FLIGHTS } from '../constants';

const initialState = {
  isFlightsFetching: false,
  flightsFetchError: null,
};

const handleStartedFetchFlight = ({ flightsFetchError }, { payload }) => ({
  isFlightsFetching: payload,
  flightsFetchError,
});

const handleFailedFetchFlight = ({ isFlightsFetching }, { payload }) => ({
  isFlightsFetching,
  flightsFetchError: payload,
});

const status = handleActions({
  [STARTED_FETCH_FLIGHTS]: handleStartedFetchFlight,
  [FAILED_FETCH_FLIGHTS]: handleFailedFetchFlight,
},
initialState);

export default status;
