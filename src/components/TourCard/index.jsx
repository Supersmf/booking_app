import React from 'react';
import PropTypes from 'prop-types';
import beachImg from '../../images/beach1.jpg';
import './TourCard.less';

const TourCard = ({ tour: { name, price, description } }) => (
  <div className="tourCard-container">
    <h5 className="tourCard-container_title">{name}</h5>
    <div className="tourCard-container_imgContainer">
      <img src={beachImg} alt="beach" className="tourCard-container_imgContainer_img" />
    </div>
    <p className="tourCard-container_priceText">
      Price
      <span className="tourCard-container_price">
        $
        {price}
      </span>
    </p>
    <p className="tourCard-container_description">{description}</p>
    <div className="tourCard-container_btnContainer">
      <a href="https://#" className="tourCard-container_btnContainer_link">view details</a>
    </div>
  </div>

);

TourCard.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default TourCard;
