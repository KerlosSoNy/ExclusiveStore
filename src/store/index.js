
import { configureStore } from '@reduxjs/toolkit';
import  productsSlice  from './Slices/Products';
import  Category from './Slices/Category';
import  Cart   from './Slices/cart';
import  WichList from './Slices/WhichList';

export const store = configureStore({
    reducer:{
        products : productsSlice,
        Cate : Category,
        Cart : Cart,
        WichList : WichList
    }
})