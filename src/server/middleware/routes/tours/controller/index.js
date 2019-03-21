import Tours from '../model';
import tourService from '../service';

export default {
  async read(ctx) {
    console.log('readTour');
    ctx.body = await Tours.find();
  },
  async create(ctx) {
    const tour = await ctx.request.body;
    try {
      await tourService.createTour(tour);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async update(ctx) {
    const { params: { id }, request: { body } } = ctx;
    try {
      await tourService.updateTour(id, body);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await tourService.deleteTour(id);
      ctx.status = 201;
    } catch (err) {
      throw new Error(err);
    }
  },
};
