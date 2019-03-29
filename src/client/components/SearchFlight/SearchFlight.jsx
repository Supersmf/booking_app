/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Flight from './Flight';
import FlightsHeader from '../FlightsHeader';
import './searchFlight.less';

class SearchFlight extends Component {
  componentDidMount() {
    const { addFlights } = this.props;
    addFlights();
  }

  render() {
    const {
      flights, tickets, dispatchAddTicket, history,
      status, searchData: { isOneway },
    } = this.props;

    const isSerach = history.location.pathname === '/search';

    const bound = isSerach ? 'Outbound' : 'Inbound';

    return (
      <div className="searchFlight-content">
        {status.isFlightsFetching ? <div className="searchFlight-content_spinner" /> : ''}
        <FlightsHeader />
        <table className="searchFlight_table">
          <tbody>
            {flights.map(flight => (
              <Flight
                {...flight}
                key={flight._id}
                isOneway={isOneway}
                tickets={tickets}
                bound={bound}
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
  dispatchAddTicket: PropTypes.func.isRequired,
  addFlights: PropTypes.func.isRequired,
  status: PropTypes.shape({
    isFlightsFetching: PropTypes.bool,
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  searchData: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SearchFlight);
