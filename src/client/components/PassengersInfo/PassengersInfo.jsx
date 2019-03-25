/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Passenger from './Passenger';
// import { Link } from 'react-router-dom';
import './passengersInfo.less';

class PassengersInfo extends Component {
  constructor(props) {
    super(props);
    const { passengers: { adults, children, infant } } = props;
    this.state = {
      adults,
      children,
      infant,
    };
  }

  onAddAdlInfo = (info, index) => {
    console.log(info);
    const { adults } = this.state;
    adults[index] = info;
    this.setState({ adults });
  }

  render() {
    const { adults, children, infant } = this.state;
    return (
      <div className="passengersInfo-content">
        <form>
          {adults.map((x, i) => (
            <Passenger key={i} order={i} type="Adult" onAddInfo={this.onAddAdlInfo} />
          ))}
          {children.map((x, i) => (
            <Passenger key={i} order={i + 1} type="Children" />
          ))}
          {infant.map((x, i) => (
            <Passenger key={i} order={i + 1} type="Infant" />
          ))}
        </form>
      </div>
    );
  }
}

PassengersInfo.propTypes = {
  // adults: PropTypes.arrayOf(PropTypes.object).isRequired,
  // children: PropTypes.arrayOf(PropTypes.object).isRequired,
  // infant: PropTypes.arrayOf(PropTypes.object).isRequired,
  passengers: PropTypes.instanceOf(Object).isRequired,
};
PassengersInfo.defaultProps = {
};

export default PassengersInfo;
