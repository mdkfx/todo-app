import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}