import express from 'express';
import { getPrices, getCurrencies, getExchangeRates, getSellPrice, getSpotPrice, getHistoricSpotPrice } from '../controllers/coinbaseController';
const coinbasePricesRouter = express.Router();

coinbasePricesRouter.get('/', getCurrencies, getPrices, getSpotPrice, (req, res) => {
  console.log('res.locals: ', res.locals);
  const data = res.locals;
  return res.status(200).json(data);
});

export default coinbasePricesRouter;