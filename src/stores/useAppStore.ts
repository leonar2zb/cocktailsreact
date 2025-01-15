import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
import { NotificationSliceType, createNotificationsSlice } from "./notificationSlices";

export const useAppStore = create<RecipesSliceType &
    FavoritesSliceType &
    NotificationSliceType>()(devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoritesSlice(...a),
        ...createNotificationsSlice(...a)
    })))