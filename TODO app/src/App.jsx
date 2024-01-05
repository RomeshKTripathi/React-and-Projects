import './App.css'
import {useState, useEffect, useRef} from 'react'

function App() {
    const [input, setInput] = useState("No Task Added")
    const [tasks, setTasks] =useState([]);
    let inputRef = useRef(null);
    useEffect(()=>{
      console.log(tasks);
    }, [tasks]);
  return (    
      <div className='w-96 p-5 h-auto rounded-lg shadow-lg shadow-gray-800 bg-gray-700 mx-auto'>
        <h1 className='text-yellow-100 text-3xl decoration-4 pb-3 border-b border-gray-800'>Todo List</h1>
        <div  className='my-2 h-10 w-full rounded-full'>
          <input
          ref={inputRef}
          className='rounded-l-full p-2 outline-none pl-3 text-orange-900' id='task-input' type="text" />
          <button 
            onClick={()=>{
              if(inputRef.current.value)
              setTasks(tasks => [...tasks, inputRef.current.value]);
              inputRef.current.value = '';
            }}
           className='bg-orange-600 text-gray-200 py-2 pl-3 pr-5 border-l-2 border-orange-800 hover:bg-orange-800 transition rounded-r-full'>Add Task</button>
        </div>

          <div className='bg-slate-900 text-white p-4 rounded-md m-5 *:border-b *:border-gray-800'>
         
          </div>
      </div>      
  )
}

export default App
