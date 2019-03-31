import { connect } from 'react-redux';
import { addLuggage } from '../../actions/luggage';
import LuggageChoose from './LuggageChoose';

const mapStateToProps = state => ({
  searchData: state.searchData,
  luggage: state.luggage,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddLuggage: data => dispatch(addLuggage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LuggageChoose);
