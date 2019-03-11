import { handleActions, combineActions } from 'redux-actions';
import { addTour } from '../actions/actionCreator';

const defaultState = [
  {
    id: 11,
    name: 'Las Vegas - grand',
    image: '../../images/beach1.jpg',
    price: 330,
    description: 'Take off from Las Vegas Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 12,
    name: 'Georgia',
    image: '../../images/beach2.jpg',
    price: 420,
    description: 'Take off from Georgia Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 13,
    name: 'Paris',
    image: '../../images/beach3.jpg',
    price: 360,
    description: 'Take off from Paris Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 14,
    name: 'Japan',
    image: '../../images/beach4.jpg',
    price: 450,
    description: 'Take off from Japan Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 15,
    name: 'Cyprus',
    image: '../../images/beach5.jpg',
    price: 220,
    description: 'Take off from Cyprus Airport on an exhilarating helicopter flight to the Grand',
  }];

const tours = handleActions(
  {
    [combineActions(addTour)]: () => ({}),
  },
  defaultState,
);

export default tours;
