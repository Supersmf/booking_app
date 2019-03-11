import { connect } from 'react-redux';
// import { addSearchData } from '../../actions/actionCreator';
import SearchFlight from './SearchFlight';

const mapStateToProps = state => ({
  flights: state.flight,
});

// const mapDispatchToProps = {
//   addFormData: addSearchData,
// };

export default connect(mapStateToProps)(SearchFlight);
