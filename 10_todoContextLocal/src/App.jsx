import { useState, useEffect } from 'react'
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem  from './components/TodoItem';
 

function App() {

  const [todos, setTodos] = useState([]);
  // how TodoContext methods will work
  const addTodo = (todo) =>{
    setTodos(prevTodos => [{id:Date.now(), ...todo}, ...prevTodos]);
  }

  const updateTodo = (id, todo) =>{
    setTodos(prevTodos =>{
      return prevTodos.map((prevTodo)=>(prevTodo.id === id)?todo:prevTodo)
    })
  }

  const deleteTodo = (id)=>{
    setTodos(prevTodos=>{
      return prevTodos.filter(prevTodo=>(prevTodo.id !== id))
    })
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodos)=>{
      return prevTodos.map((todo)=>(todo.id === id)?{...todo, completed:!todo.completed}:todo);
    })
  }

  // Local storage in the JS.
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));   
    if(todos && todos.length > 0){
      setTodos(todos);
    } 
  },[])

  useEffect(()=>{
    // store data in local storage in string format.
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(todos) 
  });


  return  <TodoProvider value={{todos, addTodo, deleteTodo, toggleComplete, updateTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {
                        todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo = {todo} />
                          </div>
                        ))
                      }
                    </div>
                </div>
            </div>
          </TodoProvider>
}

export default App
