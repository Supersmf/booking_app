import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './TicketBlock.less';

const TicketBlock = ({
  from, to, startTime, endTime, flight, price,
}) => (
  <div className="ticketBlock-content">
    <div className="ticketBlock-content_header">Ticket</div>
    <div className="ticketBlock-content_infoBlock">
      <p>{`From: ${from}`}</p>
      <p>{`To: ${to}`}</p>
      <p>{`Departure: ${startTime.format('HH:mm')}`}</p>
      <p>{`Arrival: ${endTime.format('HH:mm')}`}</p>
      <p>{`Flight: ${flight}`}</p>
      <p>{`Price: ${price}`}</p>
    </div>
  </div>
);

TicketBlock.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  startTime: PropTypes.instanceOf(moment).isRequired,
  endTime: PropTypes.instanceOf(moment).isRequired,
  flight: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TicketBlock;
