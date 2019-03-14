import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';
import './searchFlight.less';

const SearchFlight = ({
  flights, isOneway, tickets, dispatchAddTicket,
}) => (
  <div className="searchFlight-content">
    <h2 className="searchFlight-content_title">Book a ticket for the flight</h2>
    <table className="searchFlight_table">
      <tbody>
        {flights.map(flight => (
          <Flight
            {...flight}
            key={flight.id}
            isOneway={isOneway}
            tickets={tickets}
            dispatchAddTicket={dispatchAddTicket}
          />
        ))}
      </tbody>
    </table>
  </div>
);

SearchFlight.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOneway: PropTypes.bool,
  dispatchAddTicket: PropTypes.func.isRequired,
};
SearchFlight.defaultProps = {
  isOneway: false,
};

export default SearchFlight;
