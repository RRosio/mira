import express from 'express';
import { getPrices } from '../controllers/coinbaseController';
const coinbasePricesRouter = express.Router();

coinbasePricesRouter.get('/', getPrices,);

export default coinbasePricesRouter;