import express, { Express, Request, Response, Errback, NextFunction } from 'express';
require('dotenv').config();
import cors from 'cors';
import coinbaseRouter from './routes/coinbaseRouter';
import { mongoConnect } from './models/db';
import axios from 'axios';
const PORT: string | number = process.env.PORT || 8080;
const app: Express = express();

mongoConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/coinbase/signin', coinbaseRouter);
app.use('/coinbase/signin', async (req, res) => {
  console.log('req.query: ', req.query);
  const { code } = req.query;
  if(code){
    try{
      const response = await axios.post(`${process.env.BASE_URL}`, {
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.COINBASE_CLIENT_ID,
        client_secret: process.env.COINBASE_CLIENT_SECRET,
        redirect_uri: process.env.COINBASE_REDIRECT_URI
      });
      console.log('response from axios post to coinbase: ', response);
    } catch (error) {
      console.log('error in axios post to coinbase: ', error);
      res.sendStatus(400);
    }
  }
  res.send(200);
});

app.use('/hi', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({ server: "is working"});
});

// app.get('coinbase/signin', (req, res) => {
//   console.log('req.query: ', req.query);
//   res.send(200);
// });

//  app.use('*', (req,res) => {
//   res.status(404).send('Not Found');
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
