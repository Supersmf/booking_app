import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './flightsHeader.less';

const SearchFlight = ({
  history,
  searchData: {
    to, from, departDate, returnDate,
  },
}) => {
  const isSerach = history.location.pathname !== '/search/return';

  const direction = isSerach
    ? `${from} - ${to}`
    : `${to} - ${from}`;

  const date = isSerach
    ? moment(departDate).format('D MMM YYYY')
    : moment(returnDate).format('D MMM YYYY');

  return (
    <div className="flightsHeader-content_header">
      <button
        type="submit"
        onClick={history.goBack}
        className="flightsHeader-content_link-back"
      >
            Back
      </button>
      <div className="flightsHeader-content_direction">
        <h2 className="flightsHeader-content_title">{direction}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

SearchFlight.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  searchData: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SearchFlight);
