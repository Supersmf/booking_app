/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Passenger from './Passenger';
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
            if (!info[key] || info[key].length === 0) {
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
    const { history, addPassengerInfo } = this.props;
    const { adults, children, infant } = this.state;

    addPassengerInfo({ adults, children, infant });
    history.push('passengers/confirm');
  }

  render() {
    const { adults, children, infant } = this.state;
    return (
      <div className="passengersInfo-content">
        <form>
          {adults.map((info, i) => (
            <Passenger
              key={i}
              order={i}
              info={info}
              type="adults"
              onAddInfo={this.onAddInfo}
            />
          ))}
          {children.map((info, i) => (
            <Passenger
              key={i}
              order={i}
              info={info}
              type="children"
              onAddInfo={this.onAddInfo}
            />
          ))}
          {infant.map((info, i) => (
            <Passenger
              key={i}
              order={i}
              info={info}
              type="infant"
              onAddInfo={this.onAddInfo}
            />
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
  passengers: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  addPassengerInfo: PropTypes.func.isRequired,
};
PassengersInfo.defaultProps = {
};

export default withRouter(PassengersInfo);
