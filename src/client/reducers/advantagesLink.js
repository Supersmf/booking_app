import { handleActions } from 'redux-actions';
import { ADD_ADVANTAGES_LINK } from '../constants';

const initialState = [
  {
    id: 1,
    text: 'Cash on delivery service of bus tickets in major cities',
    href: 'https://#',
  },
  {
    id: 2,
    text: 'Cash on delivery service of bus tickets in major cities',
    href: 'https://#',
  },
  {
    id: 3,
    text: 'Book online using credit, debit cards and net banking',
    href: 'https://#',
  },
  {
    id: 4,
    text: 'Book bus tickets online or over IVR through our call centers',
    href: 'https://#',
  },
  {
    id: 5,
    text: 'Book bus tickets online or over 700 bus travel operators',
    href: 'https://#',
  },
  {
    id: 6,
    text: 'Return bus tickets reservation',
    href: 'https://#',
  },
  {
    id: 7,
    text: 'Return bus tickets reservation',
    href: 'https://#',
  },
  {
    id: 8,
    text: 'Cash on delivery service of bus tickets in major cities',
    href: 'https://#',
  },
  {
    id: 9,
    text: 'Cash on delivery service of bus tickets in major cities',
    href: 'https://#',
  },
  {
    id: 10,
    text: 'Book online using credit, debit cards and net banking',
    href: 'https://#',
  },
  {
    id: 11,
    text: 'Book bus tickets online or over IVR through our call centers',
    href: 'https://#',
  },
  {
    id: 12,
    text: 'Book bus tickets online or over 700 bus travel operators',
    href: 'https://#',
  },
  {
    id: 13,
    text: 'Return bus tickets reservation',
    href: 'https://#',
  },
  {
    id: 14,
    text: 'Return bus tickets reservation',
    href: 'https://#',
  },
];

const handleAddAdvantagesLink = () => ({});

const country = handleActions({
  [ADD_ADVANTAGES_LINK]: handleAddAdvantagesLink,
},
initialState);

export default country;
