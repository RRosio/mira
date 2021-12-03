import express, { Express, Request, Response, Errback, NextFunction } from 'express';
import cors from 'cors';
import coinbaseRouter from './routes/coinbaseRouter';
const PORT: string | number = process.env.PORT || 8080;
const app: Express = express();

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
