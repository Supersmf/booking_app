import { connect } from 'react-redux';
// import { addTicket } from '../../actions/actionCreator';
import ResultBooked from './ResultBooked';

const mapStateToProps = state => ({
  tickets: state.ticket,
});

// const mapDispatchToProps = {
//   dispatchAddTicket: addTicket,
// };

export default connect(mapStateToProps)(ResultBooked);
