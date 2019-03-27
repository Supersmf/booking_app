/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import InfoBlock from './InfoBlock';
import './confirmBooked.less';

const ResultBooked = ({
  dispatchCustomerConfirm, prices, passenger, tickets,
}) => {
  const {
    adultsPrice, childrenPrice, infantPrice, totalPrice,
  } = prices;
  const { adults, children, infant } = passenger;

  return (
    <div className="confirmBooked-content">
      <div className="confirmBooked-content_totalBlock">
        <div className="confirmBooked-content_totalBlock_header" />
        <div className="confirmBooked-content_totalBlock_prices">
          <InfoBlock price={adultsPrice} passenger={adults} type="Adult" />
          <InfoBlock price={childrenPrice} passenger={children} type="Children" />
          <InfoBlock price={infantPrice} passenger={infant} type="Infant" />
          <p className="confirmBooked-content_totalBlock_total">
            {`Total: ${totalPrice}$`}
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="confirmBooked-content_totalBlock_btn"
        onClick={(event) => {
          event.preventDefault();
          dispatchCustomerConfirm({ passenger, prices, tickets });
        }
        }
      >
        Confirm
      </button>
    </div>
  );
};
ResultBooked.propTypes = {
  prices: PropTypes.instanceOf(Object).isRequired,
  passenger: PropTypes.instanceOf(Object).isRequired,
  tickets: PropTypes.instanceOf(Object).isRequired,
  dispatchCustomerConfirm: PropTypes.func.isRequired,
};
ResultBooked.defaultProps = {
};

export default ResultBooked;
