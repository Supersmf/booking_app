import React from 'react';
import PropTypes from 'prop-types';
import './formRadioBtn.less';

const FormRadioBtn = ({
  title, onCheck, groupName, checked,
}) => (
  <li className="search-form_radio-group_btn">
    <label htmlFor={title}>
      <input
        type="radio"
        id={title}
        defaultChecked={checked}
        onChange={onCheck}
        name={groupName}
      />
      {title}
    </label>
  </li>
);

FormRadioBtn.propTypes = {
  title: PropTypes.string,
  onCheck: PropTypes.func,
  checked: PropTypes.bool,
  groupName: PropTypes.string,
};

FormRadioBtn.defaultProps = {
  title: 'RadioBtn',
  onCheck: () => '',
  checked: false,
  groupName: 'group',
};

export default FormRadioBtn;
