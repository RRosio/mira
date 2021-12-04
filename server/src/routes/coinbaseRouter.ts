// import express from 'express';
// const { coinbaseLoginOauthController } =  require('../controllers/coinbaseLoginOauthController');
// const coinbaseRouter = express.Router();

// console.log('coinbaseLoginOauthController: ', coinbaseLoginOauthController);
// coinbaseRouter.get('/coinbase', coinbaseLoginOauthController.coinbaseLoginGet, (req, res, next) => {
//     return res.status(200).send({ isLoggedIn: true});
// });

// export default coinbaseRouter;
import express from 'express';
import { getCoinbaseLogin } from '../controllers/coinbaseController';
const coinbaseRouter = express.Router();

coinbaseRouter.get('/', getCoinbaseLogin, (req, res) => {
    console.log('in router');
    return res.status(200).send({ data: "is okay"});
});

export default coinbaseRouter;