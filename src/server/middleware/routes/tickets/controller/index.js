import Tickets from '../model';
import ticketService from '../service';

export default {
  async read(ctx) {
    ctx.body = await Tickets.find();
  },
  async create(ctx) {
    const ticket = await ctx.request.body;
    try {
      await ticketService.createTicket(ticket);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async update(ctx) {
    const { params: { id }, request: { body } } = ctx;
    try {
      await ticketService.updateTicket(id, body);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await ticketService.deleteTicket(id);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
};
