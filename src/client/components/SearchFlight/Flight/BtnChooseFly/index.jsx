/* eslint-disable react/prop-types */
import React from 'react';
// import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './BtnChooseFly.less';

const BtnChooseFly = ({
  _id, from, to,
  startTime, endTime, flight,
  tickets, price, isOneway,
  text, btnClass, dispatchAddTicket,
}) => {
  const switchLink = (isOneway || tickets.length) ? '/search/result' : '/search/return';
  const addTicket = () => dispatchAddTicket({
    _id, from, to, startTime, price, endTime, flight,
  });

  return (
    <button
      type="submit"
      className={btnClass}
      onClick={addTicket}
    >
      <Link
        to={switchLink}
      >
        {text}
        <br />
        {price}
        $
      </Link>
    </button>
  );
};

BtnChooseFly.propTypes = {
  _id: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isOneway: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  flight: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  dispatchAddTicket: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BtnChooseFly;
