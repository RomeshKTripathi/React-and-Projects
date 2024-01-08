import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    // How data will be stored in Our context.
    todos:[],
    // functionalities of context
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete:(id) => {}

});


export  const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
