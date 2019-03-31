/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import FlightsHeader from '../FlightsHeader';
import LuggageItem from './LuggageItem';
import './luggageChoose.less';

class LuggageChoose extends Component {
  constructor(props) {
    super(props);
    const { luggage } = props;
    this.state = {
      luggage,
    };
  }

  onAddLuggage = () => {
    this.setState(({ luggage }) => {
      const { name, weight } = luggage[luggage.length - 1];
      if (!name || !weight) {
        return { luggage };
      }
      const newluggage = [...luggage];
      newluggage.push({ name: '', weight: undefined });
      // console.log(newluggage);
      return { luggage: newluggage };
    });
  }

  onAddData = (data, order, field) => {
    this.setState(({ luggage }) => {
      const newluggage = [...luggage];
      newluggage[order][field] = +data || data;
      // console.log(newluggage);
      return { luggage: newluggage };
    });
  }

  onSubmit= () => {
    const { dispatchAddLuggage, history } = this.props;
    const { luggage } = this.state;
    // console.log(luggage);
    dispatchAddLuggage(luggage);
    history.push('/search/result');
  }

  render() {
    const { luggage } = this.state;
    return (
      <div className="luggageChoose-content">
        <FlightsHeader />
        {luggage.map((item, index) => (
          <LuggageItem
            key={index}
            luggage={item}
            order={index}
            onAddData={this.onAddData}
          />
        ))}
        <button
          type="submit"
          className="luggageChoose-content_addBtn"
          onClick={this.onAddLuggage}
        >
      + Luggage / Weight
        </button>
        <button
          type="submit"
          onClick={this.onSubmit}
        >
          Next
        </button>
      </div>
    );
  }
}

LuggageChoose.propTypes = {
  dispatchAddLuggage: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  luggage: PropTypes.instanceOf(Object).isRequired,
};
LuggageChoose.defaultProps = {
};

export default withRouter(LuggageChoose);
