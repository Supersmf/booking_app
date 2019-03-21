import Flights from '../model';
import flightService from '../service';

export default {
  async read(ctx) {
    ctx.body = await Flights.find();
  },
  async create(ctx) {
    const flight = await ctx.request.body;
    try {
      await flightService.createFlight(flight);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async update(ctx) {
    const { params: { id }, request: { body } } = ctx;
    try {
      await flightService.updateFlight(id, body);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await flightService.deleteFlight(id);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
};
