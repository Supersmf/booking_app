import Flights from '../model/flights';

export default {
  async createFlight(data) {
    try {
      return Flights.create(data);
    } catch (err) {
      throw new Error(err);
    }
  },
};
