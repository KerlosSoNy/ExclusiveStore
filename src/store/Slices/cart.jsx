
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const oldCart = createAsyncThunk('Cart/oldCart',async ()=>{
    if(localStorage.getItem('cart') !== null){
    const res = await localStorage.getItem("cart")
    const data = await JSON.parse(res)
    return data 
    }else{
        return []
    }
})
export const Cart = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        increaseCount: (state, action)=>{
            let isHere = false;
            let copyState = []
            state.map((e) =>{
                if(e.product.id === action.payload.product.id){
                    return isHere = true;
                }
            })
            if(isHere){
                copyState = state.map((e)=>{
                    if(e.product.id === action.payload.product.id){
                        if(action.payload.count > 1){
                            return { product: action.payload.product , count : action.payload.count + e.count }
                        }else{
                            return { product: action.payload.product , count : 1+ e.count }
                        }
                    }else{
                        return e
                    }
                }) 
                localStorage.setItem('cart', JSON.stringify(copyState))
                return state = copyState
            }else{
                state = [...state, action.payload]
                localStorage.setItem('cart', JSON.stringify(state))
                return state
            }
        },
        increaseCartCount:(state,action)=>{
            state = state.map((e) =>{
                if(e.product.id === action.payload.product.id){
                    if(e.count >= 1){
                        return { product : e.product , count : e.count +1};
                    }else{
                        return { product : e.product , count : e.count};
                    }
                }else{
                    return e
                }
            })
            localStorage.setItem('cart', JSON.stringify(state))
            return state
        },
        decreaseCount:(state,action)=>{
            state = state.map((e) =>{
                if(e.product.id === action.payload.product.id){
                    if(e.count > 1){
                        return { product : e.product , count : e.count -1};
                    }else{
                        return { product : e.product , count : e.count};
                    }
                }else{
                    return e
                }
            })
            localStorage.setItem('cart', JSON.stringify(state))
            return state
        },
        deleteProduct:(state,action)=>{
            state = state.filter((e)=>{
                return e.product.id !== action.payload.product.id
            })
            localStorage.setItem('cart', JSON.stringify(state))
            return state;
        },
        ClearCart:(state,action)=>{
            state =[];
            localStorage.setItem('cart', JSON.stringify(state))
            return state = [];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(oldCart.fulfilled, (state,action)=>{
            return state = action.payload
        })
    }
})

export const {increaseCount,decreaseCount,deleteProduct ,increaseCartCount ,ClearCart} = Cart.actions;
export default Cart.reducer;