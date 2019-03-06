import React from 'react';
import PropTypes from 'prop-types';
import './passengersSelect.less';

const PassengersSelect = ({
  title, onSetCount, count, min, max,
}) => (
  <li className="search-form_input-group-count_count">
    <p className="search-form_input-group-select_label">{title}</p>
    <input
      type="number"
      min={min}
      max={max}
      className="search-form_input-group-count_select"
      onChange={onSetCount}
      value={count}
    />
  </li>
);

PassengersSelect.propTypes = {
  title: PropTypes.string,
  onSetCount: PropTypes.func,
  count: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

PassengersSelect.defaultProps = {
  title: 'RadioBtn',
  onSetCount: () => '',
  min: 0,
  max: 5,
};

export default PassengersSelect;
