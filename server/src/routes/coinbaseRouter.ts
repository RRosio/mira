import express from 'express';
import { getCoinbaseOauthToken, getCoinbaseUserInfo } from '../controllers/coinbaseController';
const coinbaseRouter = express.Router();

coinbaseRouter.get('/', getCoinbaseOauthToken, getCoinbaseUserInfo, (req, res) => {
    console.log('in router');
    return res.send(200);
});

export default coinbaseRouter;