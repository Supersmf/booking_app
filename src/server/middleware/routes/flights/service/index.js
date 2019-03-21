import Flights from '../model';

export default {
  async createFlight(data) {
    try {
      return await Flights.create(data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateFlight(id, data) {
    try {
      return await Flights.updateOne({ _id: id }, data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteFlight(id) {
    try {
      return await Flights.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  },
};
