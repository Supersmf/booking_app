import Customers from '../model';

export default {
  async createCustomer(data) {
    try {
      return await Customers.create(data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateCustomer(id, data) {
    try {
      return await Customers.updateOne({ _id: id }, data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteCustomer(id) {
    try {
      return await Customers.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  },
};
