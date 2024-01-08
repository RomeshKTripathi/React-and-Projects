import './App.css'
import {useState} from 'react'

function App() {
    const [input, setInput] = useState({})
    const [tasks, setTasks] =useState([]);
    const [edit, setEdit] = useState("");

    const deleteTask = (id)=>{
      const updated = tasks.filter((task)=>{
        return (task.id !== id)
      })
      setTasks(updated);
    }

    const toggleEdit = (id) =>{
      console.log("Toggle Edit")
      setTasks((prevTasks)=>{
  
        return prevTasks.map((task)=>{
          if(task.id === id){
            if(task.editable){
              const newTask = {...task, editable:false, text:edit};
              setEdit("");
              console.log("Set ReadOnly")
              return newTask;
            }else{
              setEdit(task.text);
              console.log("Set Editable")
              return {...task, editable:true};
            }
          }
        })
      })      
    }

  return (    
      <div className='w-full p-5 h-auto rounded-lg shadow-lg shadow-gray-800 bg-gray-700 mx-auto'>
        <h1 className='text-yellow-100 text-3xl decoration-4 pb-3 border-b border-gray-800'>Todo List</h1>
        <div  className='my-2 h-10 w-full rounded-full'>
          <input
          value = {input.text}
          placeholder='Add Task'
          onChange={(event)=>{
            setInput({id:Date.now(), text:event.target.value, editable:false})
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

                  <div key={task.id} className='p-2 flex justify-end first:justify-start last:border-none'>

                    <input type="text"
                    value = {(task.editable)?edit:task.text}
                    readOnly={!task.editable}
                    onChange={(e)=>{setEdit(e.target.value)}}
                    className='bg-transparent outline-none border-none'
                    />


                    <div className='ml-auto'>
                      <button                    
                      className='px-2 py-1 right-0 rounded-md bg-green-600 hover:bg-green-800 '
                      onClick={()=>{toggleEdit(task.id)}}
                      >{task.editable?"Save":"Edit"}
                      </button>
                      <button
                      className='px-2 py-1 right-0 ml-2 rounded-md bg-red-600 hover:bg-red-800 '
                      onClick={()=>{deleteTask(task.id)}}
                      >Delete
                      </button>
                    </div>
                    

                  </div>
                  
                ))
              }
          </div>
      </div>      
  )
}

export default App
