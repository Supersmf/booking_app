import React from 'react';
import PropTypes from 'prop-types';
import TourCard from '../TourCard';
import './MultiСard.less';

const MultiСard = ({ tours }) => (
  <div className="MultiСard-content">
    <h2 className="MultiСard-content_title">Featured Flight</h2>
    <div className="MultiСard-content_card-group">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  </div>
);

MultiСard.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default MultiСard;
