import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema({
  _id: Schema.Types.ObjectId,
  from: String,
  to: String,
  startTime: Schema.Types.Date,
  endTime: Schema.Types.Date,
  flight: String,
  priceEconomy: Number,
  priceBusiness: Number,
});

export default mongoose.model('Flights', ticketSchema, 'flights');
