import mongoose, { Schema } from 'mongoose';

const flightSchema = new Schema({
  from: String,
  to: String,
  startTime: Schema.Types.Date,
  endTime: Schema.Types.Date,
  flight: String,
  priceEconomy: Number,
  priceBusiness: Number,
});

export default mongoose.model('Flights', flightSchema, 'flights');
