/* eslint-disable no-underscore-dangle */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlightsHeader from '../FlightsHeader';
import './luggageChoose.less';

const ResultBooked = () => (
  <div className="resultBooked-content">
    <FlightsHeader />
    <Link
      to="result/passengers"
      className="resultBooked-content_totalBlock_btn"
    >
          Next
    </Link>
  </div>
);
ResultBooked.propTypes = {
//   tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
ResultBooked.defaultProps = {
};

export default ResultBooked;
