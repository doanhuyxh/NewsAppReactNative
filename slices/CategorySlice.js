import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [{"id": 0, "nameCate": "Trang chủ"}],
}

export const CategoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        AddCate: (state, action) => {
            state.categories.push(action.payload);
        },
        EmptyCate: (sate)=> {
            sate.categories = [{"id": 0, "nameCate": "Trang chủ"}];
        }
    },
})

export const { AddCate, EmptyCate} = CategoriesSlice.actions;
export const getCate = state=>state.category.categories;
export default CategoriesSlice.reducer;
