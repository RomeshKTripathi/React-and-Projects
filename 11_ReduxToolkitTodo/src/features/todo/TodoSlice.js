import { createSlice, nanoid } from "@reduxjs/toolkit";

// How will look store may be array / Object / value etc.
const initialState = {
    todos: [{id:1, text:"hello world", editable:false, done:false}]
}



export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        // state and action are always by default passed as paramenters.
        // state determines the current state.
        // Actions are user paramters.
        addTodo: (state, action)=>{
            if(!action.payload|| !action.payload.text || !action.payload.text.trim()) return;
            const newTodo = {
                id:nanoid(),
                text:action.payload.text,
                editable:false,
                done:false
            }
            state.todos.push(newTodo);
            
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo=> (todo.id !== action.payload.id))
        },
        updateTodo:(state, action)=>{
            state.todos = state.todos.map(todo => (todo.id === action.payload.id)?{...todo, text:action.payload.text}:todo);
        },
        toggleDone:(state, action)=>{
            // console.log("toggleEdit called");
            state.todos = state.todos.map(todo => (todo.id === action.payload.id)?{...todo, done:!todo.done}:todo);
        },
        updateTodo:(state, action)=>{
            state.todos = state.todos.map((todo)=>(todo.id === action.payload.id)?{...todo, text:action.payload.text}:todo);
        }


    }
})

export const {addTodo, removeTodo, toggleDone, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;