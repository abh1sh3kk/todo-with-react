import { useState } from "react";

function TodoItem({ todo, handleChecked, handleDelete, handleEdit }) {
  const [editedTodo, setEditedTodo] = useState(todo.description);
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEditButton = () => {
    if (editMode) {
      handleEdit({ ...todo, description: editedTodo });
    }

    toggleEditMode();
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
      {editMode ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      ) : (
        <label htmlFor={`checkbox-${todo.id}`}>{todo.description}</label>
      )}
      <button
        onClick={() => {
          handleEditButton();
        }}
      >
        {editMode ? "Save" : "Edit"}
      </button>
      <button onClick={() => handleDelete(todo["id"])}>Delete</button>
    </li>
  );
}

export default TodoItem;
