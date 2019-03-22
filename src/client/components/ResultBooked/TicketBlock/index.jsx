import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './ticketBlock.less';

const TicketBlock = ({
  // from, to, price,
  startTime, endTime, flight,
}) => (
  <div className="ticketBlock-content">
    <div className="ticketBlock-content_header">Outbound - Fr, 22 March 2019</div>
    <table className="ticketBlock-content_table">
      <tbody>
        <tr className="">
          <td>{moment(startTime).format('HH:mm')}</td>
          <td>{moment.utc(moment(endTime).diff(startTime)).format('h[h]m[m]')}</td>
          <td>{moment(endTime).format('HH:mm')}</td>
          <td>{flight}</td>
          <td><button type="submit">Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

TicketBlock.propTypes = {
  // from: PropTypes.string.isRequired,
  // to: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  flight: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
};

export default TicketBlock;
