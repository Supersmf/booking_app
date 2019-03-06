/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './linkBox.less';

const LinkBox = ({ links }) => (
  <ul className="advantages-container_listGroup_list">
    { links.map(({ id, text, href }) => (
      <li key={id}>
        <a href={href} className="advantages-container_listGroup_list_link">
          {text}
        </a>
      </li>
    ))}
  </ul>
);

LinkBox.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
};

export default LinkBox;
