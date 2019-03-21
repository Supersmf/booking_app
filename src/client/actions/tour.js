import { createAction } from 'redux-actions';
import { fetchTours } from '../services/tour';
import { ADD_TOUR_REQUEST, ADD_TOUR_SUCCESS, ADD_TOUR_FAILURE } from '../constants';

// eslint-disable-next-line import/prefer-default-export
// export const addTours = createAction(ADD_TOUR);

const addTourRequest = createAction(ADD_TOUR_REQUEST);
const addTourSuccess = createAction(ADD_TOUR_SUCCESS);
const addTourFailure = createAction(ADD_TOUR_FAILURE);

// eslint-disable-next-line import/prefer-default-export
export const addTours = () => (dispatch) => {
  dispatch(addTourRequest(true));
  fetchTours()
    .then((result) => {
      dispatch(addTourRequest(false));
      dispatch(addTourSuccess(result));
    })
    .catch((error) => {
      dispatch(addTourFailure(error));
    });
};
