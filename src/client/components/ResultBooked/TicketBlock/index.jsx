import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './ticketBlock.less';

const TicketBlock = ({
  from, to, startTime, endTime, flight, price,
}) => (
  <div className="ticketBlock-content">
    <div className="ticketBlock-content_header">Ticket</div>
    <div className="ticketBlock-content_infoBlock">
      <p>{`From: ${from}`}</p>
      <p>{`To: ${to}`}</p>
      <p>{`Departure: ${moment(startTime).format('HH:mm')}`}</p>
      <p>{`Arrival: ${moment(endTime).format('HH:mm')}`}</p>
      <p>{`Flight: ${flight}`}</p>
      <p>{`Price: ${price}`}</p>
    </div>
  </div>
);

TicketBlock.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  flight: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TicketBlock;
