import { configureStore } from '@reduxjs/toolkit'
import HeaderTitleSlice from "../slices/HeaderTitleSlice.js"
export const store = configureStore({
    reducer: {
        title : HeaderTitleSlice
    },
})
