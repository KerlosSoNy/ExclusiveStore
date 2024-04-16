
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const wishLocal = createAsyncThunk('WichList/wishLocal',async ()=>{
    if(localStorage.getItem('wishList') !== null){
    const res = await localStorage.getItem("wishList")
    const data = await JSON.parse(res)
    return data 
    }else{
        return []
    }
})

export const WichList = createSlice({
    name:"WichList",
    initialState:[],
    reducers:{
        AddToWichList:(state, action)=>{
            let isHere = false;
            let copArr = []
            state.map((e) => {
                if(e.id === action.payload.id){
                    return isHere = true;
                }
            })
            if(isHere){
                copArr = state.filter((e)=> e.id !== action.payload.id)
                localStorage.setItem('wishList', JSON.stringify(copArr))
                return state = copArr
            }else{
                state = [...state, action.payload]
                localStorage.setItem('wishList', JSON.stringify(state))
                return state;
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(wishLocal.fulfilled, (state,action)=>{
            return state = action.payload
        })
    }
})

export const {AddToWichList} = WichList.actions;
export default WichList.reducer;
