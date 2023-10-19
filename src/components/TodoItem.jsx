import { useState } from "react";

function TodoItem({ todo, handleChecked, handleDelete }) {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <li>
      <input
        id={`checkbox-${todo["id"]}`}
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          handleChecked(todo["id"], e.target.checked);
        }}
      />
      <label htmlFor={`checkbox-${todo.id}`}>{todo.description}</label>
      <button onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
      <button onClick={() => handleDelete(todo["id"])}>Delete</button>
    </li>
  );
}

export default TodoItem;
