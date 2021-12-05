import express, { Express, Request, Response, Errback, NextFunction } from 'express';
require('dotenv').config();
import cors from 'cors';
import coinbaseRouter from './routes/coinbaseRouter';
import coinbasePricesRouter from './routes/coinbasePricesRouter';
import axios from 'axios';
import { mongoConnect } from './models/db';

const PORT: string | number = process.env.PORT || 8080;
const app: Express = express();

mongoConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/coinbase/signin', coinbaseRouter);
app.use('/coinbase/prices', coinbasePricesRouter);


app.use('/hi', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({ server: "is working"});
});


//  app.use('*', (req,res) => {
//   res.status(404).redirect('/')
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
