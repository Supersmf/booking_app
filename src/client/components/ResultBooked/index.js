import { connect } from 'react-redux';
import ResultBooked from './ResultBooked';

const mapStateToProps = state => ({
  tickets: state.ticket,
  searchData: state.searchData,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultBooked);
