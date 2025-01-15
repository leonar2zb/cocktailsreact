import axios from "axios"
import { API, CategoriesAPIResponse, drinks, DrinkType, RecipeAPIResponse, SearchFilterType } from "../types"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = CategoriesAPIResponse.safeParse(data)
    if (result.success)
        return result.data

}

export async function getRecipes(filter: SearchFilterType) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.ingredient}`
    const { data } = await axios(url)
    const result = drinks.safeParse(data)
    if (result.success)
        return result.data
}

export async function getRecipeById(id: DrinkType['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponse.safeParse(data)
    if (result.success)
        return result.data.drinks[0]
}