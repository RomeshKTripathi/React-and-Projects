import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../app/todo/todoSlice'
// creating store
export const Store = configureStore({
    reducer: todoReducer 
});


 