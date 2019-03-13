import { handleActions } from 'redux-actions';
import { ADD_TOUR } from '../constants';
// import { addTour } from '../actions/actionCreator';

const initialState = [
  {
    id: 11,
    name: 'Las Vegas - grand',
    image: 'https://marketplace.canva.com/MADGxn5ZQ14/5/screen/canva-welcome-to-fabulous-las-vegas-nevada-signage-MADGxn5ZQ14.jpg',
    price: 330,
    description: 'Take off from Las Vegas Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 12,
    name: 'Georgia',
    image: 'https://marketplace.canva.com/MAC0CAbcrwI/1/screen/canva-europe%2C-asia%2C-georgia%2C-caucasus%2C-caucasia%2C-travel-MAC0CAbcrwI.jpg',
    price: 420,
    description: 'Take off from Georgia Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 13,
    name: 'Paris',
    image: 'https://marketplace.canva.com/MADGx3uYY8g/4/screen/canva-picture-of-eiffel-tower-MADGx3uYY8g.jpg',
    price: 360,
    description: 'Take off from Paris Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 14,
    name: 'Japan',
    image: 'https://marketplace.canva.com/MADGwKnChVU/5/screen/canva-close-up-photography-of-cherry-blossom-tree-MADGwKnChVU.jpg',
    price: 450,
    description: 'Take off from Japan Airport on an exhilarating helicopter flight to the Grand',
  }, {
    id: 15,
    name: 'Cyprus',
    image: 'https://marketplace.canva.com/MADGxwB3mSg/4/screen/canva-blue-body-of-water-MADGxwB3mSg.jpg',
    price: 220,
    description: 'Take off from Cyprus Airport on an exhilarating helicopter flight to the Grand',
  }];

const tours = handleActions(
  { [ADD_TOUR]: () => ({}) },
  initialState,
);

export default tours;
