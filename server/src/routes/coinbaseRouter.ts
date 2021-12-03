import express from 'express';
const { coinbaseLoginOauthController } =  require('../controllers/coinbaseOauthController');
const coinbaseRouter = express.Router();

console.log('coinbaseLoginOauthController: ', coinbaseLoginOauthController);
coinbaseRouter.get('/coinbase', coinbaseLoginOauthController.coinbaseLoginGet, (req, res, next) => {
    return res.status(200).send({ isLoggedIn: true});
});

export default coinbaseRouter;