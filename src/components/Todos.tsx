import React from "react";
import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();

  let todosData = searchParams.get("todos");
  let filterData = todos;

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="todo-list">
      {filterData.map((todo) => {
        return (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <div className="todo-left">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
                className="todo-checkbox"
              />
              <label htmlFor={`todo-${todo.id}`} className="todo-label">
                {todo.task}
              </label>
            </div>

            {todo.completed && (
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                className="todo-delete-btn"
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
