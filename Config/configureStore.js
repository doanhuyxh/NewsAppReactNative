import { configureStore } from '@reduxjs/toolkit'
import HeaderTitleSlice from "../slices/HeaderTitleSlice.js"
import {CategoriesSlice} from "../slices/CategorySlice";
export const store = configureStore({
    reducer: {
        title : HeaderTitleSlice,
        category: CategoriesSlice
    },
})
