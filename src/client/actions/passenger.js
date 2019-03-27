import { createAction } from 'redux-actions';
import { postCustomerInfo } from '../services/customer';
import {
  ADD_PASSENGER, ADD_PASSENGER_INFO, CONFIRM_CUSTOMER_REQUEST,
  CONFIRM_CUSTOMER_SUCCESS, CONFIRM_CUSTOMER_FAILURE,
} from '../constants';


// eslint-disable-next-line import/prefer-default-export
export const addPassenger = createAction(ADD_PASSENGER);
export const addPassengerInfo = createAction(ADD_PASSENGER_INFO);
export const confirmCustomerRequest = createAction(CONFIRM_CUSTOMER_REQUEST);
export const confirmCustomerSuccess = createAction(CONFIRM_CUSTOMER_SUCCESS);
export const confirmCustomerFailure = createAction(CONFIRM_CUSTOMER_FAILURE);

export const customerConfirm = data => (dispatch) => {
  dispatch(confirmCustomerRequest(true));
  postCustomerInfo(data)
    .then((result) => {
      dispatch(confirmCustomerSuccess(result));
    })
    .catch((error) => {
      dispatch(confirmCustomerFailure(error));
    });
};
