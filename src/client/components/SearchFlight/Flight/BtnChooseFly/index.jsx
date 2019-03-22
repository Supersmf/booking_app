import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './BtnChooseFly.less';

const BtnChooseFly = ({
  price, link, text, btnClass, onClick,
}) => (
  <button
    type="submit"
    className={btnClass}
    onClick={onClick}
  >
    <Link price={price} to={link}>
      {text}
      <br />
      {`${price} $`}
    </Link>
  </button>
);


BtnChooseFly.propTypes = {
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BtnChooseFly;
