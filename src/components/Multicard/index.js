import { connect } from 'react-redux';
import Multicard from './Multicard';
// import { addTour } from '../../actions/actionCreator';

const mapStateToProps = state => ({
  tours: state.tours,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Multicard);
