import { handleActions } from 'redux-actions';
import { ADD_COUNTRY } from '../constants';

const initialState = [
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

const handleAddCountry = () => ({});

const country = handleActions({
  [ADD_COUNTRY]: handleAddCountry,
},
initialState);

export default country;
