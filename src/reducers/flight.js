import { handleActions } from 'redux-actions';
import moment from 'moment';
import { ADD_FLIGHT } from '../constants';

const initialState = [
  {
    id: '21',
    from: 'Australia',
    to: 'USA',
    startTime: moment().utc().day(5).set({ hour: 14, minute: 15 }),
    endTime: moment().utc().day(5).set({ hour: 16, minute: 10 }),
    flight: 'B2 840',
    priceEconomy: 298.19,
    priceBusiness: 587.19,
  },
  {
    id: '22',
    from: 'USA',
    to: 'Australia',
    startTime: moment().utc().day(7).set({ hour: 18, minute: 5 }),
    endTime: moment().utc().day(7).set({ hour: 20, minute: 0 }),
    flight: 'B2 830',
    priceEconomy: 219.19,
    priceBusiness: 587.19,
  },
  {
    id: '23',
    from: 'Canada',
    to: 'Australia',
    startTime: moment().utc().day(9).set({ hour: 19, minute: 5 }),
    endTime: moment().utc().day(9).set({ hour: 21, minute: 5 }),
    flight: 'B2 846',
    priceEconomy: 177.05,
    priceBusiness: 585.05,
  },
  {
    id: '24',
    from: 'Australia',
    to: 'Canada',
    startTime: moment().utc().day(11).set({ hour: 20, minute: 25 }),
    endTime: moment().utc().day(11).set({ hour: 22, minute: 0 }),
    flight: 'B2 851',
    priceEconomy: 259.05,
    priceBusiness: 527.28,
  },
  {
    id: '25',
    from: 'Canada',
    to: 'USA',
    startTime: moment().utc().day(13).set({ hour: 22, minute: 0 }),
    endTime: moment().utc().day(13).set({ hour: 23, minute: 35 }),
    flight: 'B2 858',
    priceEconomy: 157.25,
    priceBusiness: 525.10,
  },
  {
    id: '26',
    from: 'USA',
    to: 'Canada',
    startTime: moment().utc().day(14).set({ hour: 20, minute: 5 }),
    endTime: moment().utc().day(14).set({ hour: 21, minute: 25 }),
    flight: 'B2 865',
    priceEconomy: 151.35,
    priceBusiness: 575.20,
  },
];

const handleAddFight = () => ({});

const flight = handleActions({
  [ADD_FLIGHT]: handleAddFight,
},
initialState);

export default flight;
