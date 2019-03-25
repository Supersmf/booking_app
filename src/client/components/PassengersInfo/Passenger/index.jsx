/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
// import { Link } from 'react-router-dom';
import './passenger.less';

const Passenger = ({ type, order }) => (
  <div className="passenger-content">
    <h3>{`${type} ${order}`}</h3>
    <div className="passenger-content_inputBlock">
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <DatePicker />
    </div>
    <div className="passenger-content_inputBlock">
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <DatePicker />
    </div>
  </div>
);
Passenger.propTypes = {
  type: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};
Passenger.defaultProps = {
};

export default Passenger;
