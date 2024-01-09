import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/TodoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (event) =>{
        event.preventDefault();
        dispatch(addTodo({text:input}));
        setInput("");
    }


    return (
    <form onSubmit={addTodoHandler} className="m-5 flex justify-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-96 "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white ml-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo;
