import { connect } from 'react-redux';
import MultiCard from './MultiСard';
import { addTours } from '../../actions/tour';

const mapStateToProps = state => ({
  tours: state.tours,
});

const mapDispatchToProps = dispatch => ({
  addTours: () => dispatch(addTours()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiCard);
