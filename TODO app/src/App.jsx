import './App.css'
import {useState} from 'react'

function App() {
    const [input, setInput] = useState({})
    const [tasks, setTasks] =useState([]);

    const deleteTask = (id)=>{
      const updated = tasks.filter((task)=>{
        return (task.id !== id)
      })
      setTasks(updated);
    }

  return (    
      <div className='w-96 p-5 h-auto rounded-lg shadow-lg shadow-gray-800 bg-gray-700 mx-auto'>
        <h1 className='text-yellow-100 text-3xl decoration-4 pb-3 border-b border-gray-800'>Todo List</h1>
        <div  className='my-2 h-10 w-full rounded-full'>
          <input
          value = {input.text}
          placeholder='Add Task'
          onChange={(event)=>{
            setInput({id:Date.now(), text:event.target.value})
          }}
          className='rounded-l-full p-2 outline-none pl-3 text-orange-900' id='task-input' type="text" />
          <button 
            onClick={(e)=>{
              if(input.text){
                setTasks(prevTasks => ([input, ...prevTasks]));
                setInput({...input, text:""})
              }
            }}
           className='bg-orange-600 text-gray-200 py-2 pl-3 pr-5 border-l-2 border-orange-800 hover:bg-orange-800 transition rounded-r-full'>Add Task</button>
        </div>

          <div  className={`bg-slate-900 text-white p-4 rounded-md m-5 *:border-b *:border-gray-800 *:text-left ${(tasks.length === 0)?"hidden":"block"}`}>
              {
                tasks.map((task)=>(
                  <p key={task.id} className='p-2 last:border-none'><button onClick={()=>{deleteTask(task.id)}} className='mr-4'>❌</button>{task.text}</p>
                ))
              }
          </div>
      </div>      
  )
}

export default App
