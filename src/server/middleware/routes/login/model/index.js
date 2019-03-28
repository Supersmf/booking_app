import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
});

export default mongoose.model('Users', userSchema, 'users');
