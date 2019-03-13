import { connect } from 'react-redux';
import { addTicket } from '../../actions/actionCreator';
import SearchReturnFlight from '../SearchFlight/SearchFlight';

const filter = ({ flight, searchData: { from, to } }) => (
  flight.filter((fly) => {
    if (fly.from === to && fly.to === from) {
      return true;
    }
    return false;
  })
);

const mapStateToProps = state => ({
  flights: filter(state),
  isOneway: state.searchData.isOneway,
  tickets: state.ticket,
});

const mapDispatchToProps = {
  dispatchAddTicket: addTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchReturnFlight);
