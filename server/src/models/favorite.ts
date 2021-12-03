import { model, Schema } from "mongoose";
import { CoinFavorite } from "../interfaces/favorite";

const favoriteSchema : Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default model<CoinFavorite>("Favorite", favoriteSchema);