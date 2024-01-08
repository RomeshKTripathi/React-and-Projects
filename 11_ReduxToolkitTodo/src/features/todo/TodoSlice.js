import { createSlice, nanoid } from "@reduxjs/toolkit";

// How will look store may be array / Object / value etc.
const initialState = {
    todos: [{id:1, text:"hello world"}]
}



export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        // state and action are always by default passed as paramenters.
        // state determines the current state.
        // Actions are user paramters.
        addTodo: (state, action)=>{
            const newTodo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(newTodo);
            
        },
        removeTodo: (state, action)=>{
            todos.filter(todo=> (todo.id !== action.payload.id))
        },
        updateTodo:()=>{},

    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;