import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';
import { CoinFavorite } from "../interfaces/favorite";
import Favorite from "../models/favorite";
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
        console.log('data from getPrices: ', data);
    } catch (error) {
        console.log('error getting prices from coinbase: ', error);
        res.sendStatus(400);
    }
    res.send(200);
};

const getFavorites = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const favorites: CoinFavorite[] = await Favorite.find();
        res.status(200).json({ favorites });
        return next();
    } catch (error) {
        res.json({ error });
    }
};

export { getCoinbaseOauthToken, getCoinbaseUserInfo, getPrices, getFavorites }