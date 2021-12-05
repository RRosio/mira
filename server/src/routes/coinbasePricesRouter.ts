import express from 'express';
import { getPrices, getCurrnecies, getExchangeRates, getSellPrice, getSpotPrice, getHistoricSpotPrice } from '../controllers/coinbaseController';
const coinbasePricesRouter = express.Router();

coinbasePricesRouter.get('/', getCurrnecies, (req, res) => {
  return res.send(200);
});

export default coinbasePricesRouter;