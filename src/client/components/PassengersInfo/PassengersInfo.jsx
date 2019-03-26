/* eslint-disable no-debugger */
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
    const { passengers: { adults = [{}], children = [], infant = [] } } = props;
    this.state = {
      adults,
      children,
      infant,
    };
  }

  onAddInfo = (
    type, order, value, field,
  ) => {
    this.setState((state) => {
      const currentInfo = [...state[type]];
      currentInfo[order][field] = value;
      return { [type]: currentInfo };
    }, () => {
      console.log(this.state);
      this.checkData();
    });
  }

  checkData = () => {
    const { adults, children, infant } = this.state;

    const check = (arr) => {
      let res = true;
      arr.forEach((info) => {
        const keys = Object.keys(info);
        if (keys.length !== 6) {
          res = false;
        } else {
          keys.forEach((key) => {
            if (info[key].length === 0) {
              res = false;
            }
          });
        }
      });
      return res;
    };
    return (check(adults) && check(children) && check(infant));
  }

  onSubmit = () => {

  }

  render() {
    const { adults, children, infant } = this.state;
    return (
      <div className="passengersInfo-content">
        <form>
          {adults.map((x, i) => (
            <Passenger key={i} order={i} type="adults" onAddInfo={this.onAddInfo} />
          ))}
          {children.map((x, i) => (
            <Passenger key={i} order={i} type="children" onAddInfo={this.onAddInfo} />
          ))}
          {infant.map((x, i) => (
            <Passenger key={i} order={i} type="infant" onAddInfo={this.onAddInfo} />
          ))}
        </form>
        <button
          type="submit"
          onClick={this.onSubmit}
          className="passengersInfo-content_submit-btn"
          disabled={!this.checkData()}
        >
            Next
        </button>
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
