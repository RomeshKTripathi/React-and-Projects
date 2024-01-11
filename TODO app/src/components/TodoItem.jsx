import React, { useState } from "react";
import { useContext } from "react";
import { Todo } from "../context/Todo";

const TodoItem = (props) => {
  const { task } = props;
  const { toggleEdit, deleteTask, toggleDone } = useContext(Todo);
  const [edit, setEdit] = useState(task.text);
  const [prevEdit, setPrevEdit] = useState("");

  return (
    <div
      className={`mt-2 text-white bg-gradient-to-r from-gray-900  rounded-md p-2 flex justify-end first:justify-start bg-opacity-10 last:border-none ${
        task.done ? "to-gray-900 rounded-md" : ""
      }`}
    >
      <button
        onClick={() => {
          toggleDone(task.id);
        }}
        className="py-1 px-2 border-2 border-purple-700  rounded-md mr-2"
      >
        ✔️
      </button>
      <input
        type="text"
        value={edit}
        readOnly={!task.editable}
        onChange={(e) => {
          setEdit(e.target.value);
        }}
        className={`bg-transparent outline-none text-lg border-none w-full ${
          task.editable ? "text-emerald-600" : "text-white"
        }
          ${task.done ? "line-through" : ""}`}
      />

      <div className="ml-auto flex">
        <button
          disabled={task.done}
          className="px-2 py-1 right-0 rounded-md bg-green-600 hover:bg-green-800 "
          onClick={() => {
            setEdit((prev) => prev.trim());
            if (!task.editable) {
              toggleEdit(task.id);
              setPrevEdit(edit);
            } else {
              if (!edit) {
                setEdit(prevEdit);
              }
              toggleEdit(task.id);
              setPrevEdit("");
            }
          }}
        >
          {task.editable ? "Save" : "Edit"}
        </button>
        <button
          className="px-2 py-1 right-0 ml-2 rounded-md bg-red-600 hover:bg-red-800 "
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
