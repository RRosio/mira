import { pricesObject } from "../interfaces/coinbaseInterfaces";

export const coinnbaseLoginOauthController: pricesObject = {
    getPrices: () => {
        console.log("coinbase oauth controller called");
        fetch(process.env.AUTHORIZE_URL)
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data);
        });
    }
};
