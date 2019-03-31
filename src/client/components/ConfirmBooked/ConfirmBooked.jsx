import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import InfoBlock from './InfoBlock';
// import FlightsHeader from '../FlightsHeader';
import './confirmBooked.less';

class ResultBooked extends Component {
  constructor(props) {
    super(props);
    const {
      dispatchCustomerConfirm, prices,
      passenger, tickets, history, luggage,
      // luggageWeight,
    } = this.props;
    this.state = {
      dispatchCustomerConfirm,
      prices,
      passenger,
      tickets,
      luggage,
      // luggageWeight,
      history,
    };
  }

  onSubmit = () => {
    const {
      dispatchCustomerConfirm, passenger,
      prices, tickets, history, luggage,
    } = this.state;

    dispatchCustomerConfirm({
      passenger, prices, tickets, luggage,
    });
    history.push('/');
  };

  render() {
    const {
      prices: {
        adultsPrice, childrenPrice, infantPrice,
        totalPrice, luggagePrice,
      },
      passenger: { adults, children, infant },
    } = this.state;
    const { luggageWeight } = this.props;
    return (
      <div className="confirmBooked-content">
        {/* <FlightsHeader /> */}
        <div className="confirmBooked-content_totalBlock">
          <div className="confirmBooked-content_totalBlock_header" />
          <div className="confirmBooked-content_totalBlock_prices">
            <InfoBlock price={adultsPrice} passenger={adults} type="Adult" />
            <InfoBlock price={childrenPrice} passenger={children} type="Children" />
            <InfoBlock price={infantPrice} passenger={infant} type="Infant" />
            <p>{`Luggage: ${luggageWeight} kg   ${luggagePrice}$`}</p>
            <p className="confirmBooked-content_totalBlock_total">
              {`Total: ${totalPrice}$`}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="confirmBooked-content_totalBlock_btn"
          onClick={this.onSubmit}
        >
        Confirm
        </button>
      </div>
    );
  }
}

ResultBooked.propTypes = {
  prices: PropTypes.instanceOf(Object).isRequired,
  passenger: PropTypes.instanceOf(Object).isRequired,
  tickets: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  dispatchCustomerConfirm: PropTypes.func.isRequired,
  luggageWeight: PropTypes.number.isRequired,
  luggage: PropTypes.instanceOf(Object).isRequired,
};
ResultBooked.defaultProps = {
};

export default withRouter(ResultBooked);
