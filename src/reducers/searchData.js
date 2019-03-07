import { handleActions, combineActions } from 'redux-actions';
import { addSearchData } from '../actions/actionCreator';

const defaultState = [];

const searchData = handleActions(
  {
    [combineActions(addSearchData)]: (
      state,
      {
        payload: {
          from, to, departDate, returnDate, adults, children, infant,
        },
      },
    ) => ({
      ...state, from, to, departDate, returnDate, adults, children, infant,
    }),
  },
  defaultState,
);

export default searchData;
