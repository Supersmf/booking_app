import { createAction } from 'redux-actions';
import { fetchFlights } from '../services/flight';
import { ADD_FLIGHTS_REQUEST, ADD_FLIGHT_SUCCESS, ADD_FLIGHT_FAILURE } from '../constants';

const addFlightRequest = createAction(ADD_FLIGHTS_REQUEST);
const addFlightSuccess = createAction(ADD_FLIGHT_SUCCESS);
const addFlightFailure = createAction(ADD_FLIGHT_FAILURE);

// eslint-disable-next-line import/prefer-default-export
export const addFlights = () => (dispatch) => {
  dispatch(addFlightRequest(true));
  fetchFlights()
    .then((result) => {
      dispatch(addFlightRequest(false));
      dispatch(addFlightSuccess(result));
    })
    .catch((error) => {
      dispatch(addFlightFailure(error));
    });
};
