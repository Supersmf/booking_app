import { handleActions, combineActions } from 'redux-actions';
import moment from 'moment';
import { addFlight } from '../actions/actionCreator';

const defaultState = [
  {
    id: '21',
    startTime: moment().set({ hour: 14, minute: 15 }),
    endTime: moment().set({ hour: 16, minute: 10 }),
    flight: 'B2 840',
    priceEconomy: 298.19,
    priceBusiness: 587.19,
  },
  {
    id: '22',
    startTime: moment().set({ hour: 18, minute: 5 }),
    endTime: moment().set({ hour: 20, minute: 0 }),
    flight: 'B2 830',
    priceEconomy: 219.19,
    priceBusiness: 587.19,
  },
  {
    id: '23',
    startTime: moment().set({ hour: 19, minute: 5 }),
    endTime: moment().set({ hour: 21, minute: 5 }),
    flight: 'B2 846',
    priceEconomy: 177.05,
    priceBusiness: 585.05,
  },
  {
    id: '24',
    startTime: moment().set({ hour: 20, minute: 25 }),
    endTime: moment().set({ hour: 22, minute: 0 }),
    flight: 'B2 851',
    priceEconomy: 259.05,
    priceBusiness: 527.28,
  },
  {
    id: '25',
    startTime: moment().set({ hour: 22, minute: 0 }),
    endTime: moment().set({ hour: 23, minute: 35 }),
    flight: 'B2 858',
    priceEconomy: 157.25,
    priceBusiness: 525.10,
  },
];

const flight = handleActions(
  {
    [combineActions(addFlight)]: () => ({}),
  },
  defaultState,
);

export default flight;
