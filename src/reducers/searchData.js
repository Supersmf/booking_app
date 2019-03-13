import { handleActions } from 'redux-actions';
import { ADD_SEARCH_DATA } from '../constants';

const initialState = [];

const onAddData = (state, {
  payload: {
    from, to, departDate, returnDate, adults, children, infant, isOneway,
  },
}) => ({
  ...state, from, to, departDate, returnDate, adults, children, infant, isOneway,
});

const searchData = handleActions(
  { [ADD_SEARCH_DATA]: onAddData },
  initialState,
);

export default searchData;
