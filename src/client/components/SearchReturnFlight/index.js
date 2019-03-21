import { connect } from 'react-redux';
import { addTickets } from '../../actions/tickets';
import { addFlights } from '../../actions/flight';
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
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddTicket: data => dispatch(addTickets(data)),
  addFlights: () => dispatch(addFlights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchReturnFlight);
