import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './BtnChooseFly.less';

const BtnChooseFly = ({
  price, link, text, onClick, type,
}) => (
  <button
    type="submit"
    className={
      type === 'Economy'
        ? 'searchFlight_table_btn economyBtn'
        : 'searchFlight_table_btn businessBtn'
    }
    onClick={onClick}
  >
    <Link price={price} type={type} to={link}>
      {text}
      <br />
      {`${price} $`}
    </Link>
  </button>
);


BtnChooseFly.propTypes = {
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BtnChooseFly;
