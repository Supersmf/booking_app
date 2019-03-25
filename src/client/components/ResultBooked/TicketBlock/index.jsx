import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './ticketBlock.less';

const TicketBlock = ({
  from, to, price, type, bound,
  startTime, endTime, flight,
}) => (
  <div className="ticketBlock-content">
    <div className="ticketBlock-content_header">
      {`${bound} - ${moment(startTime).format('dd')}, 
        ${moment(startTime).format('D MMM YYYY')}`}
    </div>
    <table className="ticketBlock-content_table">
      <tbody>
        <tr className="">
          <td>
            {moment(startTime).format('HH:mm')}
            <br />
            <span className="ticketBlock-content_table_underline">{from}</span>
          </td>
          <td>
            {moment.utc(moment(endTime).diff(startTime)).format('h[h]m[m]')}
            <br />
            <span className="ticketBlock-content_table_underline">Direct</span>
          </td>
          <td>
            {moment(endTime).format('HH:mm')}
            <br />
            <span className="ticketBlock-content_table_underline">{to}</span>
          </td>
          <td className="ticketBlock-content_table_plane">{flight}</td>
          <td>
            {`${price}$`}
            <br />
            <span className="ticketBlock-content_table_underline">{type}</span>
          </td>
          <td>
            <button type="submit" className="ticketBlock-content_table_btn">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

TicketBlock.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  flight: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bound: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TicketBlock;
