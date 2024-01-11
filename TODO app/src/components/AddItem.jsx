import React, { useContext, useState } from "react";
import { Todo } from "../context/Todo";

const AddItem = () => {
  const { addTask } = useContext(Todo);
  const [input, setInput] = useState("");
  const saveTask = () => {
    if (input.trim()) {
      addTask({ id: Date.now(), text: input, editable: false, done: false });
    }
  };

  return (
    <div className="my-2 h-10 w-full rounded-full">
      <input
        value={input}
        placeholder="Add Task"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        className="rounded-l-full p-2 outline-none pl-3 text-orange-900"
        id="task-input"
        type="text"
      />
      <button
        onClick={() => {
          saveTask();
          setInput("");
        }}
        className="bg-orange-600 text-gray-200 py-2 pl-3 pr-5 border-l-2 border-orange-800 hover:bg-orange-800 transition rounded-r-full"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddItem;
