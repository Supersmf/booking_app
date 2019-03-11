import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { addSearchData } from '../../actions/actionCreator';

const mapStateToProps = state => ({
  form: state.searchData,
  country: state.country,
});

const mapDispatchToProps = {
  addFormData: addSearchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
