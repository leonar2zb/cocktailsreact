import { z } from 'zod'

export const CategoriesAPIResponse = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        }))
})

export type CategoriesAPIResponseType = z.infer<typeof CategoriesAPIResponse>

export const SearchFilter = z.object({
    ingredient: z.string(),
    category: z.string()
})

export type SearchFilterType = z.infer<typeof SearchFilter>

export const drink = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
})

export type DrinkType = z.infer<typeof drink>

export const drinks = z.object({
    drinks: z.array(drink)
})

export type DrinksType = z.infer<typeof drinks>
