import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { addSearchData, clearTicket } from '../../actions/actionCreator';

const mapStateToProps = state => ({
  form: state.searchData,
  country: state.country,
});

const mapDispatchToProps = {
  addFormData: addSearchData,
  dispatchClearTicket: clearTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
