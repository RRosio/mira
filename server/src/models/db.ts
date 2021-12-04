import mongoose from 'mongoose';
require('dotenv').config();
const uri = process.env.MONGO_URI;

const mongoConnect = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log('error connecting to db: ', error);
    // process.exit();
  }
}  

export { mongoConnect }