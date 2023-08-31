import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    news: [],
}

export const NewsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        AddNews:(state, action)=>{
            console.log("Đã chèn dữ liệu vào")
            state.news.push(action.payload);
        },
        EmptyNews:(state)=>{
            state.news = []
        }
    }
})

export const {AddNews, EmptyNews} = NewsSlice.actions
export const SelectNewsByCateId =(state, cateid) => state.news.news.filter(i=>JSON.parse(i.cateID).include(cateid));
export const Selec5tNewsByCateId =(state, cateid) => state.news.news.filter(i=>JSON.parse(i.cateID).include(cateid));
export const getAllNews = (state)=> state.news.news
export default NewsSlice.reducer
