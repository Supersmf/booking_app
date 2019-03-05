import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
// import './calendar.less';

const Calendar = ({ title, func, time }) => (
  <li className="search-form_input-group-select search-form_input-group-select-calendar">
    <p htmlFor="Depart" className="search-form_input-group-select_label">{title}</p>
    <DatePicker
      selected={time}
      onChange={func}
      className="search-form_input-group-calendar-input"
    />
  </li>
);

Calendar.propTypes = {
  title: PropTypes.string,
  func: PropTypes.func,
  time: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
  title: 'RadioBtn',
  func: () => '',
  time: new Date(),
};

export default Calendar;
