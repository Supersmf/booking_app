import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './passenger.less';

const Passenger = ({
  type, order, onAddInfo,
  info: {
    birthday = null,
    expirationDate = null,
    firstName = '',
    lastName = '',
    nationality = '',
    passportNumber = '',
  },
}) => (
  <div className="passenger-content">
    <h3>{`${type} ${order + 1}`}</h3>
    <div className="passenger-content_inputBlock">
      <input
        placeholder="First Name"
        value={firstName}
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'firstName'))}
      />
      <input
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'lastName'))}
      />
      <DatePicker
        placeholderText="Date of birth"
        selected={birthday}
        dateFormat="dd  MMM  yyyy"
        onChange={date => onAddInfo(type, order, date, 'birthday')}
      />
    </div>
    <div className="passenger-content_inputBlock">
      <input
        placeholder="Nationality"
        value={nationality}
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'nationality'))}
      />
      <input
        placeholder="Passport number"
        value={passportNumber}
        onChange={({ target: { value } }) => (
          onAddInfo(type, order, value, 'passportNumber'))}
      />
      <DatePicker
        placeholderText="Expiration date"
        dateFormat="dd  MMM  yyyy"
        selected={expirationDate}
        onChange={date => onAddInfo(type, order, date, 'expirationDate')}
      />
    </div>
  </div>
);
Passenger.propTypes = {
  type: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  info: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nationality: PropTypes.string,
    passportNumber: PropTypes.string,
  }).isRequired,
  onAddInfo: PropTypes.func.isRequired,
};
Passenger.defaultProps = {
};

export default Passenger;
