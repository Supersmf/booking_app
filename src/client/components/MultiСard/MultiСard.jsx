/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TourCard from '../TourCard';
import './multiСard.less';

class MultiСard extends Component {
  componentDidMount() {
    const { addTours } = this.props;
    addTours();
  }

  render() {
    const { tours } = this.props;
    return (
      <div className="MultiСard-content">
        <h2 className="MultiСard-content_title">Featured Flight</h2>
        <div className="MultiСard-content_card-group">
          {tours.map(tour => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      </div>
    );
  }
}

MultiСard.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  addTours: PropTypes.func.isRequired,
};

export default MultiСard;
