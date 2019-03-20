import { createAction } from 'redux-actions';
import { fetchFlights, addFlights } from '../services';
import {
  ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK,
  ADD_COUNTRY, ADD_TOUR, ADD_FLIGHT,
  ADD_TICKET, CLEAR_TICKET, STARTED_FETCH_FLIGHTS,
  FAILED_FETCH_FLIGHTS,
  // FETCH_FLIGHT,
  FETCH_FLIGHT_LOADING,
} from '../constants';

export const addSearchData = createAction(ADD_SEARCH_DATA);
export const addAdvantagesLinks = createAction(ADD_ADVANTAGES_LINK);
export const addCountry = createAction(ADD_COUNTRY);
export const addTour = createAction(ADD_TOUR);
export const addFlight = createAction(ADD_FLIGHT);
export const fetchFlightLoading = createAction(FETCH_FLIGHT_LOADING);
export const addTicket = createAction(ADD_TICKET);
export const clearTicket = createAction(CLEAR_TICKET);
export const startedFetchFlights = createAction(STARTED_FETCH_FLIGHTS);
export const failedFetchFlights = createAction(FAILED_FETCH_FLIGHTS);

export const fetchFlight = () => (dispatch) => {
  dispatch(startedFetchFlights(true));
  addFlights();
  fetchFlights()
    .then((result) => {
      dispatch(startedFetchFlights(false));
      dispatch(addFlight(result));
    })
    .catch((error) => {
      dispatch(failedFetchFlights(error));
    });
};
