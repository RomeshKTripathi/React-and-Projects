import { useSelector } from 'react-redux'
import React from 'react'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'


function App() {
  const todos = useSelector(state=> state.todos)
  return (
    <>
     <AddTodo />

    {
      todos.map(todo=>(
        <TodoItem key={todo.id} todo={todo}/>
      ))

    }
    </>
  )
}

export default App
