import { oAuthObject } from "../interfaces/coinbaseInterfaces";
import { Request, Response, NextFunction } from 'express';
export const coinbaseLoginOauthController: oAuthObject = {
    coinbaseLoginGet: (req: Request, res: Response, next: NextFunction) => {
        console.log("coinbase oauth controller called");
        fetch(process.env.AUTHORIZE_URL)
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data);
        });
        return next();
    },

    coinbaseLoginPost: () => {

    }
};


