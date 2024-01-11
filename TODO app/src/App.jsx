import "./App.css";
import { useState } from "react";
import { TodoProvider } from "./context/Todo";
import AddItem from "./components/AddItem";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((allTasks) => [task, ...allTasks]);
  };
  const updateTask = (newTask, id) => {
    setTasks((allTasks) =>
      allTasks.map((task) => (task.id === id ? newTask : task))
    );
  };
  const deleteTask = (id) => {
    setTasks((allTasks) => allTasks.filter((task) => task.id !== id));
  };
  const toggleEdit = (id) => {
    setTasks((allTasks) =>
      allTasks.map((task) =>
        task.id == id ? { ...task, editable: !task.editable } : task
      )
    );
  };
  const toggleDone = (id) => {
    setTasks((allTasks) =>
      allTasks.map((task) =>
        task.id == id ? { ...task, done: !task.done } : task
      )
    );
  };
  return (
    <TodoProvider
      value={{ tasks, addTask, updateTask, deleteTask, toggleEdit, toggleDone }}
    >
      <div className="w-full p-5 h-auto rounded-lg shadow-lg shadow-gray-800 bg-gray-700 mx-auto">
        <h1 className="text-yellow-100 text-3xl decoration-4 pb-3 border-b border-gray-800">
          Todo List
        </h1>
        <AddItem />

        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
