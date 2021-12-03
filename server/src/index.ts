import express, { Express, Request, Response, Errback, NextFunction } from 'express';
require('dotenv').config();
import cors from 'cors';
import coinbaseRouter from './routes/coinbaseRouter';
import mongoose, { connect } from 'mongoose';
const PORT: string | number = process.env.PORT || 8080;
const app: Express = express();
const uri = process.env.MONGO_URI || `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_PWD}@clustermain.vdrv1.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

const mongoConnect = async () => {
  try {
    console.log(uri);
    await mongoose.connect(uri);
  } catch (error) {
    process.exit();
  }
}  
mongoConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/coinbase', coinbaseRouter);

app.use('/hi', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({ server: "is working"});
});

// app.use('*', (req,res) => {
//   res.status(404).send('Not Found');
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
