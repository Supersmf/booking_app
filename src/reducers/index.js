import { combineReducers } from 'redux';
import searchData from './searchData';
import advantagesLink from './advantagesLink';

const rootReducer = combineReducers({
  searchData,
  advantagesLink,
});

export default rootReducer;
