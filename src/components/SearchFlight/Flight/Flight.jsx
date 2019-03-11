import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Flight.less';

const Flight = ({
  flight: {
    startTime, endTime, flight, priceEconomy, priceBusiness,
  },
}) => (
  <tr>
    <td>{startTime.format('HH:mm')}</td>
    <td>{moment.utc(endTime.diff(startTime)).format('h[h]m[m]')}</td>
    <td>{endTime.format('HH:mm')}</td>
    <td>{flight}</td>
    <td>
      <button
        type="submit"
        className="searchFlight_table_btn economyBtn"
        onClick={() => ({})}
      >
        Economy
        <br />
        {priceEconomy}
        $
      </button>
    </td>
    <td>
      <button
        type="submit"
        className="searchFlight_table_btn businessBtn"
        onClick={() => ({})}
      >
        Business
        <br />
        {priceBusiness}
        $
      </button>
    </td>
  </tr>
);

Flight.propTypes = {
  flight: PropTypes.shape({
    // startTime: PropTypes.instanceOf(Date),
    // endTime: PropTypes.instanceOf(Date),
    flight: PropTypes.string,
    priceEconomy: PropTypes.number,
    priceBusiness: PropTypes.number,
  }).isRequired,
};

export default Flight;
