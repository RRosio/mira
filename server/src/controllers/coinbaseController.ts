// import { oAuthObject } from "../interfaces/coinbaseInterfaces";
import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';

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
    console.log("in getCoinbaseLogin");
    try {
        const result : AxiosResponse = await axios.get(process.env.AUTHORIZE_URL);
        console.log('result from axios: ', result);
        return next();
    } catch (error) {
        res.json({ error })
    }
};

export { getCoinbaseLogin }