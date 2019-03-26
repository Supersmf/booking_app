/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
// import { Link } from 'react-router-dom';
import './passenger.less';

const Passenger = ({
  type, order,
  // info: { birthday },
  onAddInfo,
}) => (
  <div className="passenger-content">
    <h3>{`${type} ${order + 1}`}</h3>
    <div className="passenger-content_inputBlock">
      <input
        placeholder="First Name"
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'firstName'))}
      />
      <input
        placeholder="Last Name"
        name="lastName"
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'lastName'))}
      />
      <DatePicker
        placeholderText="Date of birth"
        // selected={birthday}
        onChange={date => onAddInfo(type, order, date, 'birthday')}
      />
    </div>
    <div className="passenger-content_inputBlock">
      <input
        placeholder="Nationality"
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'nationality'))}
      />
      <input
        placeholder="Passport number"
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'passportNumber'))}
      />
      <DatePicker
        placeholderText="Expiration date"
        onChange={date => onAddInfo(type, order, date, 'expirationDate')}
      />
    </div>
  </div>
);
Passenger.propTypes = {
  type: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  // info: PropTypes.objectOf(PropTypes.string).isRequired,
  onAddInfo: PropTypes.func.isRequired,
};
Passenger.defaultProps = {
};

export default Passenger;
