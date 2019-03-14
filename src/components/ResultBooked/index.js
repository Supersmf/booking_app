import { connect } from 'react-redux';
import ResultBooked from './ResultBooked';

const mapStateToProps = state => ({
  tickets: state.ticket,
});

// const mapDispatchToProps = {
// };

export default connect(mapStateToProps)(ResultBooked);
