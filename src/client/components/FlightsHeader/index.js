import { connect } from 'react-redux';
import FlightsHeader from './FlightsHeader';

const mapStateToProps = state => ({
  searchData: state.searchData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsHeader);
