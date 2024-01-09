import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodoSlice'
// creating store
export const Store = configureStore({
    reducer: todoReducer 
});


 