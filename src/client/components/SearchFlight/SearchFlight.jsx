/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';
import './searchFlight.less';

class SearchFlight extends Component {
  componentDidMount() {
    const { addFlights } = this.props;
    addFlights();
  }

  render() {
    const {
      flights, isOneway, tickets, dispatchAddTicket,
      // status,
    } = this.props;
    // console.log(status);
    return (
      <div className="searchFlight-content">
        <h2 className="searchFlight-content_title">Book a ticket for the flight</h2>
        <table className="searchFlight_table">
          <tbody>
            {flights.map(flight => (
              <Flight
                {...flight}
                key={flight._id}
                isOneway={isOneway}
                tickets={tickets}
                dispatchAddTicket={dispatchAddTicket}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

SearchFlight.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOneway: PropTypes.bool,
  dispatchAddTicket: PropTypes.func.isRequired,
  addFlights: PropTypes.func.isRequired,
  status: PropTypes.shape({
    isFlightsFetching: PropTypes.bool,
  }).isRequired,
};
SearchFlight.defaultProps = {
  isOneway: false,
};

export default SearchFlight;
