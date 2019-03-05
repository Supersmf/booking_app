import React from 'react';
import beachImg from '../../images/beach1.jpg';
import './tourCard.less';

const TourCard = () => (
  <div className="tourCard-container">
    <h5 className="tourCard-container_title">Las Vegas -grand</h5>
    <div className="tourCard-container_imgContainer">
      <img src={beachImg} alt="beach" className="tourCard-container_imgContainer_img" />
    </div>
    <p className="tourCard-container_priceText">
Price
      <span className="tourCard-container_price">$449</span>
    </p>
    <p className="tourCard-container_description">Take off from Las Vegas Airport on an exhilarating helicopter flight to the Grand</p>
    <div className="tourCard-container_btnContainer">
      <a href="https://#" className="tourCard-container_btnContainer_link">view details</a>
    </div>
  </div>

);

export default TourCard;
