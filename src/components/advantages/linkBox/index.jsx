/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './linkBox.less';

const Advantages = ({ links }) => (
  <ul className="advantages-container_listGroup_list">
    { links.map((link, index) => (
      <li key={index}><a href="https://#" className="advantages-container_listGroup_list_link">{link}</a></li>
    ))}
  </ul>
);

Advantages.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Advantages;
