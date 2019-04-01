/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      if (!luggage.length) {
        return { luggage: [{ name: '', weight: undefined }] };
      }
      const { name, weight } = luggage[luggage.length - 1];
      if (!name || !weight) {
        return { luggage };
      }
      const newluggage = [...luggage];
      newluggage.push({ name: '', weight: undefined });
      return { luggage: newluggage };
    });
  }

  onAddData = (data, order, field) => {
    this.setState(({ luggage }) => {
      const newluggage = [...luggage];
      newluggage[order][field] = field === 'name' ? String(data) : +data || undefined;
      return { luggage: newluggage };
    });
  }

  onSubmit= () => {
    const { dispatchAddLuggage, history } = this.props;
    const { luggage } = this.state;
    const { name, weight } = luggage[luggage.length - 1];
    if (!name || !weight || isNaN(weight)) {
      if (luggage.length > 1)luggage.pop();
    }
    dispatchAddLuggage(luggage);
    history.push('/search/result');
  }

  render() {
    const { luggage } = this.state;
    return (
      <div className="luggageChoose-content">
        <FlightsHeader />
        <TransitionGroup>
          {luggage.map((item, index) => (
            <CSSTransition
              classNames="luggage-animation"
              key={index}
              timeout={500}
            >
              <LuggageItem
                luggage={item}
                order={index}
                onAddData={this.onAddData}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button
          type="submit"
          className="luggageChoose-content_addBtn"
          onClick={this.onAddLuggage}
        >
      + Luggage / Weight
        </button>
        <button
          type="submit"
          className="luggageChoose-content_submitBtn"
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
