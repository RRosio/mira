import { Document } from "mongoose";

export interface CoinFavorite extends Document {
    name: string
    price: string
}