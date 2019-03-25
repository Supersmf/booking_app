import { connect } from 'react-redux';
import PassengersInfo from './PassengersInfo';

const mapStateToProps = state => ({
//   tickets: state.ticket,
//   searchData: state.searchData,
  passengers: state.passenger,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PassengersInfo);
