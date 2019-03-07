import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Advantages from '../Advantages';
import Banner from '../Banner';
import './AdvantagesBlock.less';

const AdvantagesBlock = ({ links }) => (
  <div className="advantagesBlock-content">
    <Advantages links={links} />
    <Banner />
  </div>
);

AdvantagesBlock.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  links: state.advantagesLink,
});

export default connect(mapStateToProps)(AdvantagesBlock);
