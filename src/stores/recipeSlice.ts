import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { CategoriesAPIResponseType, DrinksType, DrinkType, RecipeType, SearchFilterType } from "../types"

export type RecipesSliceType = {
    categories: CategoriesAPIResponseType,
    drinks: DrinksType,
    recipe: RecipeType,
    fetchCategories: () => Promise<void>,
    searchRecipes: (SearchFilter: SearchFilterType) => Promise<void>
    getRecipeById: (id: DrinkType["idDrink"]) => Promise<void>
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    recipe: {} as RecipeType,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (search) => {
        const recipes = await getRecipes(search)
        set({
            drinks: recipes
        })
    },
    getRecipeById: async (id) => {
        const recipe = await getRecipeById(id)
        set({
            recipe
        })
    },
})