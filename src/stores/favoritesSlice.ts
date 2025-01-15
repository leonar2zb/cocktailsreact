import { StateCreator } from "zustand";
import { RecipeType } from "../types";

export type FavoritesSliceType = {
    favorites: RecipeType[]
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = () => ({
    favorites: []
})