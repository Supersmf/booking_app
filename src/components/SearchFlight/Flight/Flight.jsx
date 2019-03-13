import React from 'react';
import moment from 'moment';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnChooseFly from './BtnChooseFly';
import './Flight.less';

const Flight = ({
  id, from, to, tickets,
  startTime, endTime, flight,
  priceEconomy, priceBusiness,
  isOneway, dispatchAddTicket,
}) => (
  <tr>
    <td>{startTime.format('HH:mm')}</td>
    <td>{moment.utc(endTime.diff(startTime)).format('h[h]m[m]')}</td>
    <td>{endTime.format('HH:mm')}</td>
    <td>{flight}</td>
    <td>
      <BtnChooseFly
        id={id}
        from={from}
        to={to}
        startTime={startTime}
        endTime={endTime}
        flight={flight}
        price={priceEconomy}
        isOneway={isOneway}
        tickets={tickets}
        text="Economy"
        btnClass="searchFlight_table_btn economyBtn"
        dispatchAddTicket={dispatchAddTicket}
      />
    </td>
    <td>
      <BtnChooseFly
        id={id}
        from={from}
        to={to}
        startTime={startTime}
        endTime={endTime}
        flight={flight}
        price={priceBusiness}
        isOneway={isOneway}
        tickets={tickets}
        text="Business"
        btnClass="searchFlight_table_btn businessBtn"
        dispatchAddTicket={dispatchAddTicket}
      />
    </td>
  </tr>
);

Flight.propTypes = {
  id: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  startTime: PropTypes.instanceOf(moment).isRequired,
  endTime: PropTypes.instanceOf(moment).isRequired,
  flight: PropTypes.string.isRequired,
  priceEconomy: PropTypes.number.isRequired,
  priceBusiness: PropTypes.number.isRequired,
  isOneway: PropTypes.bool.isRequired,
  dispatchAddTicket: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Flight;
