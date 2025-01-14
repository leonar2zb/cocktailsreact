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