import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import { CategoriesAPIResponseType, SearchFilterType } from "../types"

export type RecipesSliceType = {
    categories: CategoriesAPIResponseType,
    fetchCategories: () => Promise<void>,
    searchRecipes: (SearchFilter: SearchFilterType) => Promise<void>
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (search) => {
        console.log(search)
    },
})