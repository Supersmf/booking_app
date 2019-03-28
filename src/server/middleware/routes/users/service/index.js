import Users from '../model';

export default {
  async createUser(data) {
    try {
      return await Users.create(data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async updateUser(id, data) {
    try {
      return await Users.updateOne({ _id: id }, data);
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteUser(id) {
    try {
      return await Users.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  },
};
