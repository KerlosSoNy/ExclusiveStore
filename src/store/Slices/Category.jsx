
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const CateFetch = createAsyncThunk("Category/CateFetch", async()=>{
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data
})
export const Category = createSlice({
    name:"Category",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(CateFetch.fulfilled,(state,action)=>{
            return state = [action.payload]
        })
    }
})

export default Category.reducer;