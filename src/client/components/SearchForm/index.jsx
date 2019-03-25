import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { addSearchData, clearTicket } from '../../actions/actionCreator';
import { addPassenger } from '../../actions/passenger';

const mapStateToProps = state => ({
  form: state.searchData,
  country: state.country,
});

const mapDispatchToProps = {
  addFormData: addSearchData,
  addPassenger,
  dispatchClearTicket: clearTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
