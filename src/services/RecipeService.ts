import axios from "axios"
import { CategoriesAPIResponse, drinks, SearchFilterType } from "../types"

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