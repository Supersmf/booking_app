import { combineReducers } from 'redux';
import searchData from './searchData';
import advantagesLink from './advantagesLink';
import country from './country';

const rootReducer = combineReducers({
  searchData,
  advantagesLink,
  country,
});

export default rootReducer;
