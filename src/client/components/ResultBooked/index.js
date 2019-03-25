import { connect } from 'react-redux';
import ResultBooked from './ResultBooked';

const childDiscount = 0.5;
const infantDiscount = 0.1;

const calcPrice = (tickets, { adults, children, infant }) => {
  let adultsPrice = 0;
  let childrenPrice = 0;
  let infantPrice = 0;
  tickets.forEach(({ price }) => {
    adultsPrice += price * adults;
    childrenPrice += price * children * childDiscount;
    infantPrice += price * infant * infantDiscount;
  });
  const totalPrice = adultsPrice + childrenPrice + infantPrice;

  return {
    adultsPrice: adultsPrice.toFixed(2),
    childrenPrice: childrenPrice.toFixed(2),
    infantPrice: infantPrice.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

const mapStateToProps = state => ({
  tickets: state.ticket,
  searchData: state.searchData,
  prices: calcPrice(state.ticket, state.searchData),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultBooked);
