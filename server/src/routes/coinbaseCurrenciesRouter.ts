import express from 'express';
import { getCurrencies } from '../controllers/coinbaseController';
const coinbaseCurrenciesRouter = express.Router();

coinbaseCurrenciesRouter.get('/', getCurrencies, (req, res) => {
  console.log('res.locals: ', res.locals);
  const data = res.locals;
  return res.status(200).json(data);
});

export default coinbaseCurrenciesRouter;