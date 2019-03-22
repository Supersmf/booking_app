/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      flights, isOneway, tickets, dispatchAddTicket, history,
      status,
    } = this.props;
    return (
      <div className="searchFlight-content">
        {status.isFlightsFetching ? <div className="searchFlight-content_spinner" /> : ''}
        <h2 className="searchFlight-content_title">Book a ticket for the flight</h2>
        <button
          type="submit"
          onClick={history.goBack}
          className="searchFlight-content_link-back"
        >
          Back
        </button>
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
  history: PropTypes.instanceOf(Object).isRequired,
};
SearchFlight.defaultProps = {
  isOneway: false,
};

export default withRouter(SearchFlight);
