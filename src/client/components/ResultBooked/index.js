import { connect } from 'react-redux';
import ResultBooked from './ResultBooked';

const childDiscount = 0.5;
const infantDiscount = 0.1;
const freeWeight = 10;

const totalWeight = luggage => (
  luggage.reduce((sum, { weight }) => (sum + +weight || 0), 0));

const calcPrice = (tickets, { adults, children, infant }, luggage) => {
  let adultsPrice = 0;
  let childrenPrice = 0;
  let infantPrice = 0;
  tickets.forEach(({ price }) => {
    adultsPrice += price * adults;
    childrenPrice += price * children * childDiscount;
    infantPrice += price * infant * infantDiscount;
  });
  const totalPrice = adultsPrice + childrenPrice + infantPrice;
  const freeLuggageWeight = freeWeight * (adults + children + infant);
  const luggagePrice = totalWeight(luggage) > freeLuggageWeight
    ? totalPrice * 0.1 : 0;

  return {
    adultsPrice: adultsPrice.toFixed(2),
    childrenPrice: childrenPrice.toFixed(2),
    infantPrice: infantPrice.toFixed(2),
    luggagePrice: luggagePrice.toFixed(2),
    totalPrice: (totalPrice + luggagePrice).toFixed(2),
  };
};

const mapStateToProps = state => ({
  tickets: state.ticket,
  searchData: state.searchData,
  prices: calcPrice(state.ticket, state.searchData, state.luggage),
  luggageWeight: totalWeight(state.luggage),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultBooked);
