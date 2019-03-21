import Tickets from '../model';

export default {
  async createFlight(data) {
    try {
      return await Tickets.create(data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateFlight(id, data) {
    try {
      return await Tickets.updateOne({ _id: id }, data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteFlight(id) {
    try {
      return await Tickets.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  },
};
