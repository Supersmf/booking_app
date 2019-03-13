import { connect } from 'react-redux';
import MultiCard from './MultiСard';
// import { addTour } from '../../actions/actionCreator';

const mapStateToProps = state => ({
  tours: state.tours,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MultiCard);
