import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';
require('dotenv').config();

const getCoinbaseOauthToken = async (req: Request, res: Response, next: NextFunction) => {
    console.log("in getCoinbaseLogin controller function");
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
        res.locals.data = response.data;
        next();

        } catch (error) {
        console.log('error in axios post to coinbase: ', error);
        res.sendStatus(400);
        }
    }
};

const getCoinbaseUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token, token_type, expires_in, refresh_token, scope, created_at } = res.locals.data;
    try{
        const { data } = await axios.get(
            'https://api.coinbase.com/v2/user/',
            {
            headers: {
                Authorization: `${token_type} ${access_token}`
            },
            }
        );
        console.log('user data: ', data);
        const id = data[Object.keys(data)[0]].id;
        const native_currency = data[Object.keys(data)[0]].native_currency;
        console.log('id: ',id);
        console.log('native_currency: ',native_currency);
        next();
    } catch (error) {
        res.sendStatus(400);
    }
};

const getPrices = async (req: Request, res: Response, next: NextFunction) => {
    const price_type = 'spot';//res.locals.price_type;
    const currency = 'USD';//res.locals.currency;
    try {
        const { data } = await axios.get(
            `https://api.coinbase.com/v2/prices/${price_type}?currency=${currency}`
        );
        // console.log('data from getPrices: ', data);
        console.log('data from getPrices: ');
        res.locals.prices = data;
        next();
    } catch (error) {
        console.log('error getting prices from coinbase: ', error);
        res.sendStatus(400);
    }
};

const getCurrencies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = await axios.get(
            'https://api.coinbase.com/v2/currencies'
        );
        // console.log('data from currencies: ', data);
        console.log('data from currencies: ');
        const currencies = data[Object.keys(data)[0]];
        console.log('spot price data currencies: ', currencies);
        res.locals.currencies = currencies;
        next();
    } catch (error) {
        console.log('error getting currencies: ', error);
        res.sendStatus(400);
    }
};

const getExchangeRates = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = await axios.get(
            'https://api.coinbase.com/v2/exchange-rates'
        );
        console.log('exchange rates data: ', data);
        res.locals.exchangeRates = data;
        next();
    } catch (error) {
        console.log('error getting currencies: ', error);
        res.sendStatus(400);
    }
};

const getSellPrice = async (req: Request, res: Response, next: NextFunction) => {
    const interest_coin = 'BTC';//res.locals.interest_coin;
    const currency = 'USD';//res.locals.currency;
    try {
        const { data } = await axios.get(
            `https://api.coinbase.com/v2/prices/:${interest_coin}-${currency}/sell`
        );
        // console.log('sell price data: ', data);
        console.log('sell price data: ');
        res.locals.sellPrice = data;
        next();
    } catch (error) {
        console.log('error getting sell price: ', error);
        res.sendStatus(400);
    }
};

// CURRENT MARKET PRICE
const getSpotPrice = async (req: Request, res: Response, next: NextFunction) => {
    const interest_coin = 'BTC';//res.locals.interest_coin;
    const currency = 'USD';//res.locals.currency;
    try {
        const { data } = await axios.get(
            `https://api.coinbase.com/v2/prices/${interest_coin}-${currency}/spot`
        );
        // console.log('spot price data: ', data);
        console.log('spot price data: ');
        res.locals.currentSpotPrice = data;
        next();
    } catch (error) {
        console.log('error getting spot price: ', error);
        res.sendStatus(400);
    }
};

// HISTORIC MARKET PRICE
const getHistoricSpotPrice = async (req: Request, res: Response, next: NextFunction) => {
    const interest_coin = 'BTC';//res.locals.interest_coin;
    const currency = 'USD';//res.locals.currency;
    const days = 183;//res.locals.date YYYY-MM-DD
    try {
        const { data } = await axios.get(
            `https://api.coinbase.com/v2/prices/${interest_coin}-${currency}/historic?days=${days}`
        );
        console.log('spot price data: ', data);
        res.locals.historicSpotPrice = data;
        next();
    } catch (error) {
        console.log('error getting spot price: ', error);
        res.sendStatus(400);
    }
};

export { getCoinbaseOauthToken, getCoinbaseUserInfo, getPrices, getCurrencies, getExchangeRates, getSellPrice, getSpotPrice, getHistoricSpotPrice }