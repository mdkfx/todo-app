import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text }]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}