import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema({
  from: String,
  to: String,
  startTime: Schema.Types.Date,
  endTime: Schema.Types.Date,
  flight: String,
  price: Number,
});

export default mongoose.model('Tickets', ticketSchema, 'tickets');
