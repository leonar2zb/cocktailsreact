import { StateCreator } from "zustand";
import { RecipeType } from "../types";

export type FavoritesSliceType = {
    favorites: RecipeType[],
    handleClickFavorite: (recipe: RecipeType) => void,
    hasReceipe: (id: RecipeType["idDrink"]) => boolean,
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        const favoritesBefore = get().favorites
        let newFavorites = []
        const exists: boolean = favoritesBefore.some(favorite => favorite.idDrink === recipe.idDrink)
        if (exists)
            newFavorites = favoritesBefore.filter(favorite => favorite.idDrink !== recipe.idDrink)
        else
            newFavorites = [...favoritesBefore, recipe]
        set({
            favorites: newFavorites
        })
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        console.log((exists ? 'Quitado ' : 'Agregado '), recipe.strDrink)
    },
    hasReceipe: (id) => get().favorites.some(favorite => favorite.idDrink === id),
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites)
            set({
                favorites: JSON.parse(storedFavorites)
            })
    }
})