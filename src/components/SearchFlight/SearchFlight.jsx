import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';
import './SearchFlight.less';

const SearchFlight = ({ flights }) => (
  <div className="searchFlight-content">
    <table className="searchFlight_table">
      <tbody>
        {flights.map(flight => (
          <Flight flight={flight} key={flight.id} />
        ))}
      </tbody>
    </table>
  </div>
);

SearchFlight.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchFlight;
