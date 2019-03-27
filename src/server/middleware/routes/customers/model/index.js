import mongoose, { Schema } from 'mongoose';

const customerSchema = new Schema({
  passenger: Array,
  prices: Object,
  tickets: Array,
});

export default mongoose.model('Customers', customerSchema, 'customers');
