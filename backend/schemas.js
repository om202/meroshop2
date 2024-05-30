import {Schema} from 'mongoose';

export const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export const productSchema = new Schema({
  id: String,
  title: String,
  price: Number,
  description: String,
  image: String,
});