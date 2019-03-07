import { handleActions, combineActions } from 'redux-actions';
import { addCountry } from '../actions/actionCreator';

const defaultState = [
  {
    id: 1,
    country: 'Australia',
    code: 'AU',
  },
  {
    id: 2,
    country: 'Canada',
    code: 'CA',
  },
  {
    id: 3,
    country: 'USA',
    code: 'US',
  },
];

const country = handleActions(
  {
    [combineActions(addCountry)]: () => ({}),
  },
  defaultState,
);

export default country;
