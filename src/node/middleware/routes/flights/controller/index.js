import Flights from '../model/flights';
import flightService from '../service';

export default {
  async read(ctx) {
    ctx.body = await Flights.find();
  },
  async create(ctx) {
    const flight = await ctx.request.body;
    console.log(flight);
    try {
      flightService.createFlight(flight);
    } catch (err) {
      throw new Error(err);
    }
  },
};
