import React from 'react';
import PropTypes from 'prop-types';
import TicketBlock from './TicketBlock';
import './ResultBooked.less';

const ResultBooked = ({ tickets }) => (
  <div className="resultBooked-content">
    {/* {console.log(tickets)} */}
    {tickets.map(ticket => (
      <TicketBlock {...ticket} key={ticket.id} />
    ))}
    <diV>
      {/* <p>Total</p> */}
    </diV>
  </div>
);

ResultBooked.propTypes = {
//   flights: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
//   isOneway: PropTypes.bool,
//   dispatchAddTicket: PropTypes.func.isRequired,
};
ResultBooked.defaultProps = {
//   isOneway: false,
};

export default ResultBooked;
