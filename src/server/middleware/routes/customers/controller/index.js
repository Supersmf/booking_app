import Customers from '../model';
import customerService from '../service';

export default {
  async read(ctx) {
    ctx.body = await Customers.find();
  },
  async create(ctx) {
    const customer = await ctx.request.body;
    try {
      await customerService.createCustomer(customer);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async update(ctx) {
    const { params: { id }, request: { body } } = ctx;
    try {
      await customerService.updateCustomer(id, body);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await customerService.deleteCustomer(id);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
};
