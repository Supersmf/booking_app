import Users from '../model';
import userService from '../service';

export default {
  async read(ctx) {
    ctx.body = await Users.find();
  },
  async create(ctx) {
    const user = await ctx.request.body;
    try {
      await userService.createCustomer(user);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async update(ctx) {
    const { params: { id }, request: { body } } = ctx;
    try {
      await userService.updateUser(id, body);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await userService.deleteUser(id);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
};
