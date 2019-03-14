import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BtnChooseFly from './BtnChooseFly';
import './flight.less';

const Flight = (props) => {
  const {
    startTime, endTime, flight,
    priceEconomy, priceBusiness,
  } = props;
  return (
    <tr>
      <td>{startTime.format('HH:mm')}</td>
      <td>{moment.utc(endTime.diff(startTime)).format('h[h]m[m]')}</td>
      <td>{endTime.format('HH:mm')}</td>
      <td>{flight}</td>
      <td>
        <BtnChooseFly
          {...props}
          price={priceEconomy}
          text="Economy"
          btnClass="searchFlight_table_btn economyBtn"
        />
      </td>
      <td>
        <BtnChooseFly
          {...props}
          price={priceBusiness}
          text="Business"
          btnClass="searchFlight_table_btn businessBtn"
        />
      </td>
    </tr>
  );
};

Flight.propTypes = {
  startTime: PropTypes.instanceOf(moment).isRequired,
  endTime: PropTypes.instanceOf(moment).isRequired,
  flight: PropTypes.string.isRequired,
  priceEconomy: PropTypes.number.isRequired,
  priceBusiness: PropTypes.number.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Flight;
