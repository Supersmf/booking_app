import React from 'react';
import PropTypes from 'prop-types';
import './formRadioBtn.less';

const FormRadioBtn = ({
  title, func, groupName, checked,
}) => (
  <li className="search-form_radio-group_btn">
    <label htmlFor={title}>
      <input type="radio" id={title} defaultChecked={checked} onChange={func} name={groupName} />
      {title}
    </label>
  </li>
);

FormRadioBtn.propTypes = {
  title: PropTypes.string,
  func: PropTypes.func,
  checked: PropTypes.bool,
  groupName: PropTypes.string,
};

FormRadioBtn.defaultProps = {
  title: 'RadioBtn',
  func: () => '',
  checked: false,
  groupName: 'group',
};

export default FormRadioBtn;
