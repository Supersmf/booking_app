import mongoose, { Schema } from 'mongoose';

const tourSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
});

export default mongoose.model('Tours', tourSchema, 'tours');
