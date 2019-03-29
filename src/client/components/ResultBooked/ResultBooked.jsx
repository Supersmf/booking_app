/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TicketBlock from './TicketBlock';
import FlightsHeader from '../FlightsHeader';
import './resultBooked.less';

const ResultBooked = ({
  tickets, searchData: { adults, children, infant },
  prices: {
    adultsPrice, childrenPrice, infantPrice, totalPrice,
  },
}) => (
  <div className="resultBooked-content">
    <FlightsHeader />
    <div className="resultBooked-content_tickets">
      {tickets.map(ticket => (
        <TicketBlock {...ticket} key={ticket._id} />
      ))}
    </div>
    <div className="resultBooked-content_totalBlock">
      <div className="resultBooked-content_totalBlock_header" />
      <div className="resultBooked-content_totalBlock_prices">
        {adults
          ? (
            <div className="resultBooked-content_totalBlock_item">
              <p>{`> ${adults} Adult`}</p>
              <p>{`${adultsPrice}$`}</p>
            </div>
          )
          : ''}
        {children
          ? (
            <div className="resultBooked-content_totalBlock_item">
              <p>{`> ${children} Children`}</p>
              <p>{`${childrenPrice}$`}</p>
            </div>
          )
          : ''}
        {infant
          ? (
            <div className="resultBooked-content_totalBlock_item">
              <p>{`> ${infant} Infant`}</p>
              <p>{`${infantPrice}$`}</p>
            </div>
          )
          : ''}
        <p className="resultBooked-content_totalBlock_total">
          {`Total: ${totalPrice}$`}
        </p>
      </div>
    </div>
    <Link
      to="result/passengers"
      className="resultBooked-content_totalBlock_btn"
    >
          Next
    </Link>
  </div>
);
ResultBooked.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchData: PropTypes.instanceOf(Object).isRequired,
  prices: PropTypes.instanceOf(Object).isRequired,
};
ResultBooked.defaultProps = {
};

export default ResultBooked;
