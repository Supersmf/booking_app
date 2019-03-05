import React from 'react';
import PropTypes from 'prop-types';

const LinkLi = ({ text, index, classes }) => (
  <li key={index}><a href="https://#" className={classes}>{text}</a></li>
);

LinkLi.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  classes: PropTypes.string,
};

LinkLi.defaultProps = {
  classes: '',
};

export default LinkLi;
