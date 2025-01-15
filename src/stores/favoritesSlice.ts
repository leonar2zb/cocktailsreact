import { StateCreator } from "zustand";
import { RecipeType } from "../types";

export type FavoritesSliceType = {
    favorites: RecipeType[],
    handleClickFavorite: (recipe: RecipeType) => void,
    hasReceipe: (id: RecipeType["idDrink"]) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        const favoritesBefore = get().favorites
        const exists: boolean = favoritesBefore.some(favorite => favorite.idDrink === recipe.idDrink)
        if (exists)
            set({
                favorites: favoritesBefore.filter(favorite => favorite.idDrink !== recipe.idDrink)
            })
        else
            set({ favorites: [...favoritesBefore, recipe] })
        console.log((exists ? 'Quitado ' : 'Agregado '), recipe.strDrink)
    },
    hasReceipe: (id) => get().favorites.some(favorite => favorite.idDrink === id)
})