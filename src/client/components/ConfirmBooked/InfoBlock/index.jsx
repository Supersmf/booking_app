/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './infoBlock.less';

const InfoBlock = ({ price, passenger, type }) => (
  <Fragment>
    {passenger && passenger.length
      ? (
        <div>
          <div className="confirmBooked-content_totalBlock_item">
            <p>{`> ${passenger.length} ${type}`}</p>
            <p>{`${price}$`}</p>
          </div>
          <div className="confirmBooked-content_totalBlock_itemInfo">
            {passenger.map(({ firstName, lastName, birthday }, index) => (
              <p key={index}>
                {`${firstName} ${lastName}, age 
                  ${moment().diff(moment(birthday), 'years')}`}

              </p>
            ))}
          </div>
        </div>
      )
      : ''}
  </Fragment>
);

InfoBlock.propTypes = {
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  passenger: PropTypes.instanceOf(Array),
};

InfoBlock.defaultProps = {
  passenger: [],
};

export default InfoBlock;
