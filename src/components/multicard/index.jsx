import React from 'react';
import TourCard from '../tourCard';
import './multicard.less';

const Multicard = () => (
  <div className="multicard-content">
    <h2 className="multicard-content_title">Featured Flight</h2>
    <div className="multicard-content_card-group">
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
    </div>
  </div>
);

export default Multicard;
