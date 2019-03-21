import React from 'react';
import PropTypes from 'prop-types';
import './formDataList.less';

const FormDataList = ({ title, data, onCountryChoose }) => (
  <li className="search-form_input-group-select">
    <p className="search-form_input-group-select_label">{title}</p>
    <input
      type="text"
      list={`${title}list`}
      className="search-form_input-group-select_select"
      onChange={onCountryChoose}
    />
    <datalist id={`${title}list`}>
      {data.map(({ country, code, id }) => (
        <option key={id} value={country}>{code}</option>
      ))}
    </datalist>
  </li>
);

FormDataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  onCountryChoose: PropTypes.func,
};

FormDataList.defaultProps = {
  data: [],
  title: 'RadioBtn',
  onCountryChoose: () => '',
};

export default FormDataList;
