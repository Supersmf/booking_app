import Tickets from '../model';

export default {
  async createTour(data) {
    try {
      return await Tickets.create(data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateTour(id, data) {
    try {
      return await Tickets.updateOne({ _id: id }, data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteTour(id) {
    try {
      return await Tickets.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  },
};
