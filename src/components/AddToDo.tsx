import React, { useState, type FormEvent } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (todo.trim() === "") return; // prevent empty task
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="todo-form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button type="submit" className="todo-submit-btn">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
