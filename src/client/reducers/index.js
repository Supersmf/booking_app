import { combineReducers } from 'redux';
import searchData from './searchData';
import advantagesLink from './advantagesLink';
import tours from './tours';
import flight from './flight';
import country from './country';
import ticket from './ticket';
import status from './status';

const rootReducer = combineReducers({
  searchData,
  advantagesLink,
  country,
  tours,
  flight,
  ticket,
  status,
});

export default rootReducer;
