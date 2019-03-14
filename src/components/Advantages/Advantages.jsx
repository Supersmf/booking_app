import React from 'react';
import PropTypes from 'prop-types';
import LinkBox from './linkBox';
import './advantages.less';

const Advantages = ({ links }) => (
  <div className="advantages-container">
    <h2 className="advantages-container_title">JB Advantages-A</h2>
    <div className="advantages-container_listGroup">
      <LinkBox links={links} />
    </div>
    <div className="advantages-container_btnContainer">
      <a href="https://#" className="advantages-container_btnContainer_link">view more</a>
    </div>
  </div>
);

Advantages.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
};

export default Advantages;
