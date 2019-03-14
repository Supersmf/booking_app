import { handleActions } from 'redux-actions';
import { ADD_SEARCH_DATA } from '../constants';

const initialState = {
  from: '',
  to: '',
  departDate: new Date(),
  returnDate: new Date(),
  adults: 1,
  children: 0,
  infant: 0,
  isOneway: true,
};

const handleAddSearchData = (state, {
  payload: {
    from, to, departDate, returnDate, adults, children, infant, isOneway,
  },
}) => ({
  ...state, from, to, departDate, returnDate, adults, children, infant, isOneway,
});

const searchData = handleActions({
  [ADD_SEARCH_DATA]: handleAddSearchData,
},
initialState);

export default searchData;
