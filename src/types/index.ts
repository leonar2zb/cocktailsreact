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

export const Recipe = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
});

export type RecipeType = z.infer<typeof Recipe>

export const RecipeAPIResponse = z.object({
    drinks: z.array(Recipe)
})

export type RecipeAPIResponseType = z.infer<typeof RecipeAPIResponse>