import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Advantages from '../advantages';
import Banner from '../banner';
import './advantagesBlock.less';

// eslint-disable-next-line react/prefer-stateless-function
class AdvantagesBlock extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className="advantagesBlock-content">
        <Advantages links={links} />
        <Banner />
      </div>
    );
  }
}

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
