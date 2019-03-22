import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BtnChooseFly from './BtnChooseFly';
import './flight.less';

class Flight extends Component {
  onAddTicket = (event) => {
    const price = +event.target.getAttribute('price');
    const {
      _id, from, to, startTime,
      endTime, flight, dispatchAddTicket,
    } = this.props;

    dispatchAddTicket({
      _id, from, to, startTime, endTime, flight, price,
    });
  };

  renderLink = () => {
    const { tickets, isOneway } = this.props;
    return (isOneway || tickets.length) ? '/search/result' : '/search/return';
  };

  render() {
    const {
      startTime, endTime, flight,
      priceEconomy, priceBusiness,
    } = this.props;
    return (
      <tr>
        <td>{moment(startTime).format('HH:mm')}</td>
        <td>{moment.utc(moment(endTime).diff(startTime)).format('h[h]m[m]')}</td>
        <td>{moment(endTime).format('HH:mm')}</td>
        <td>{flight}</td>
        <td>
          <BtnChooseFly
            onClick={this.onAddTicket}
            price={priceEconomy}
            link={this.renderLink()}
            text="Economy"
            btnClass="searchFlight_table_btn economyBtn"
          />
        </td>
        <td>
          <BtnChooseFly
            onClick={this.onAddTicket}
            price={priceBusiness}
            link={this.renderLink()}
            text="Business"
            btnClass="searchFlight_table_btn businessBtn"
          />
        </td>
      </tr>
    );
  }
}

Flight.propTypes = {
  _id: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  flight: PropTypes.string.isRequired,
  priceEconomy: PropTypes.number.isRequired,
  priceBusiness: PropTypes.number.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchAddTicket: PropTypes.func.isRequired,
  isOneway: PropTypes.bool.isRequired,
};

export default Flight;
