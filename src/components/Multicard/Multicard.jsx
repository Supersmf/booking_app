import React from 'react';
import PropTypes from 'prop-types';
import TourCard from '../TourCard';
import './Multicard.less';

const Multicard = ({ tours }) => (
  <div className="multicard-content">
    <h2 className="multicard-content_title">Featured Flight</h2>
    <div className="multicard-content_card-group">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  </div>
);

Multicard.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default Multicard;
