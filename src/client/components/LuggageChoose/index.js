import { connect } from 'react-redux';
import { addTickets } from '../../actions/tickets';
import LuggageChoose from './LuggageChoose';

const mapStateToProps = state => ({
  searchData: state.searchData,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddTicket: data => dispatch(addTickets(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LuggageChoose);
