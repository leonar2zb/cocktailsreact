import { z } from 'zod'

export const CategoriesAPIResponse = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        }))
})

export type CategoriesAPIResponseType = z.infer<typeof CategoriesAPIResponse>