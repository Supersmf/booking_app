import { ADD_SEARCH_DATA, ADD_ADVANTAGES_LINK } from '../constants/constants';

const addSearchData = ({
  from, to, departDate, returnDate, adults, children, infant,
}) => ({
  type: ADD_SEARCH_DATA,
  from,
  to,
  departDate,
  returnDate,
  adults,
  children,
  infant,
});

const addAdvantagesLinks = ({ id, text, href }) => (
  {
    type: ADD_ADVANTAGES_LINK,
    id,
    text,
    href,
  }
);

export {
  addSearchData,
  addAdvantagesLinks,
};
