import { connect } from 'react-redux';
import { addFlights } from '../../actions/flight';
import { addTickets } from '../../actions/tickets';
import SearchFlight from './SearchFlight';

const filter = ({ flight, searchData: { from, to } }) => (
  flight.filter((fly) => {
    if (fly.from === from && fly.to === to) {
      return true;
    }
    return false;
  })
);

const mapStateToProps = state => ({
  flights: filter(state),
  searchData: state.searchData,
  tickets: state.ticket,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddTicket: data => dispatch(addTickets(data)),
  addFlights: () => dispatch(addFlights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);
