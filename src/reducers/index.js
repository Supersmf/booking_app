import { combineReducers } from 'redux';
import searchData from './searchData';
import advantagesLink from './advantagesLink';
import tours from './tours';
import flight from './flight';
import country from './country';

const rootReducer = combineReducers({
  searchData,
  advantagesLink,
  country,
  tours,
  flight,
});

export default rootReducer;
