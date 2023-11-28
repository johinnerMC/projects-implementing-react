import { useState } from "react";
import Todo from "./todo";

import './todoApp.css'

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    if (title.length > 0) {
      setTodos([...todos, newTodo]);
      setTitle('')
    }
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id != id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title} />
        <input className="buttonCreate" type="submit" value="Create todo" />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
