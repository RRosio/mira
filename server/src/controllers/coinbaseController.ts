// import { oAuthObject } from "../interfaces/coinbaseInterfaces";
import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';
import { CoinFavorite } from "../interfaces/favorite";
import Favorite from "../models/favorite";
// export const coinbaseLoginOauthController: oAuthObject = {
//     coinbaseLoginGet: async (req: Request, res: Response, next: NextFunction) => {
//         console.log("coinbase oauth controller called");
//         let result : AxiosResponse = await axios.get(process.env.AUTHORIZE_URL)
//         console.log('result from axios: ', result);
//         return next();
//     },

//     coinbaseLoginPost: () => {

//     }
// };

const getCoinbaseLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("in getCoinbaseLogin controller function");
    try {
        const result : AxiosResponse = await axios.get(process.env.AUTHORIZE_URL);
        console.log('result from axios: ', result);
        next()
    } catch (error) {
        res.json({ error });
    }
};

const getFavorites = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const favorites: CoinFavorite[] = await Favorite.find();
        res.status(200).json({ favorites });
        return next();
    } catch (error) {
        res.json({ error });
    }
} 

export { getCoinbaseLogin, getFavorites }