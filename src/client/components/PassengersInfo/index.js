import { connect } from 'react-redux';
import PassengersInfo from './PassengersInfo';
import { addPassengerInfo } from '../../actions/passenger';

const mapStateToProps = state => ({
//   tickets: state.ticket,
//   searchData: state.searchData,
  passengers: state.passenger,
});

const mapDispatchToProps = {
  addPassengerInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(PassengersInfo);
