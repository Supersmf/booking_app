import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './calendar.less';

const Calendar = ({ title, onChooseDate, time }) => (
  <li className="search-form_input-group-select search-form_input-group-select-calendar">
    <p htmlFor="Depart" className="search-form_input-group-select_label">{title}</p>
    <DatePicker
      selected={time}
      onChange={onChooseDate}
      className="search-form_input-group-calendar-input"
    />
  </li>
);

Calendar.propTypes = {
  title: PropTypes.string,
  onChooseDate: PropTypes.func,
  time: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
  title: 'RadioBtn',
  onChooseDate: () => '',
  time: new Date(),
};

export default Calendar;
