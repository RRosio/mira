import { CoinFavorite } from "../interfaces/favorite";
import Favorite from "../models/favorite";
import { Request, Response, NextFunction } from 'express';
require('dotenv').config();

const getFavorites = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const favorites: CoinFavorite[] = await Favorite.find();
        res.status(200).json({ favorites });
        return next();
    } catch (error) {
        res.json({ error });
    }
};

export { getFavorites }