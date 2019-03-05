import React from 'react';
import PropTypes from 'prop-types';
import './passengersSelect.less';

const PassengersSelect = ({
  title, func, count, min,
}) => (
  <li className="search-form_input-group-count_count">
    <p className="search-form_input-group-select_label">{title}</p>
    <input type="number" min={min} max={count} className="search-form_input-group-count_select" onChange={func} defaultValue={min} />
  </li>
);

PassengersSelect.propTypes = {
  title: PropTypes.string,
  func: PropTypes.func,
  count: PropTypes.number.isRequired,
  min: PropTypes.number,
};

PassengersSelect.defaultProps = {
  title: 'RadioBtn',
  func: () => '',
  min: 0,
};

export default PassengersSelect;
