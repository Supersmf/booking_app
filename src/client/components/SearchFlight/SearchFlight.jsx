/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
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
      flights, tickets, dispatchAddTicket, history,
      status, searchData: {
        to, from, isOneway, departDate, returnDate,
      },
    } = this.props;

    const isSerach = history.location.pathname === '/search';

    const direction = isSerach
      ? `${from} - ${to}`
      : `${to} - ${from}`;

    const date = isSerach
      ? moment(departDate).format('D MMM YYYY')
      : moment(returnDate).format('D MMM YYYY');

    const bound = isSerach ? 'Outbound' : 'Inbound';

    return (
      <div className="searchFlight-content">
        {status.isFlightsFetching ? <div className="searchFlight-content_spinner" /> : ''}
        <div className="searchFlight-content_header">
          <button
            type="submit"
            onClick={history.goBack}
            className="searchFlight-content_link-back"
          >
            Back
          </button>
          <div className="searchFlight-content_direction">
            <h2 className="searchFlight-content_title">{direction}</h2>
            <p>{date}</p>
          </div>
        </div>
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
  // isOneway: PropTypes.bool,
  dispatchAddTicket: PropTypes.func.isRequired,
  addFlights: PropTypes.func.isRequired,
  status: PropTypes.shape({
    isFlightsFetching: PropTypes.bool,
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  searchData: PropTypes.instanceOf(Object).isRequired,
};
// SearchFlight.defaultProps = {
//   isOneway: false,
// };

export default withRouter(SearchFlight);
