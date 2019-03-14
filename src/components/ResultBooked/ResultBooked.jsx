import React from 'react';
import PropTypes from 'prop-types';
import TicketBlock from './TicketBlock';
import './resultBooked.less';

const ResultBooked = ({ tickets }) => {
  const total = (tickets.reduce((sum, { price }) => (
    sum + price), 0)).toFixed(2);
  return (
    <div className="resultBooked-content">
      <div className="resultBooked-content_tickets">
        {tickets.map(ticket => (
          <TicketBlock {...ticket} key={ticket.id} />
        ))}
      </div>
      <div className="resultBooked-content_totalBlock">
        <div className="resultBooked-content_totalBlock_header" />
        <p>{`${total}$`}</p>
        <button
          type="submit"
          className="resultBooked-content_totalBlock_btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

ResultBooked.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
ResultBooked.defaultProps = {
};

export default ResultBooked;
