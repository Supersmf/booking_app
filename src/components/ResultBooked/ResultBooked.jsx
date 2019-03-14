import React from 'react';
import PropTypes from 'prop-types';
import TicketBlock from './TicketBlock';
import './ResultBooked.less';

const ResultBooked = ({ tickets }) => {
  tickets.reduce((sum, { price }) => console.log(price), tickets[0].price);
  return (
    <div className="resultBooked-content">
      {tickets.map(ticket => (
        <TicketBlock {...ticket} key={ticket.id} />
      ))}
      <div>
        {/* {total} */}
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
