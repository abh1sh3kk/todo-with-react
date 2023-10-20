import { useState } from "react";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { FiSave } from "react-icons/fi";

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
    <li className="todo">
      <section className="todo__info">
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
          className="add-todo__input"
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        ) : (
          <label htmlFor={`checkbox-${todo.id}`}>{todo.description}</label>
        )}
      </section>

      <section className="todo__actions">
        <span
          onClick={() => {
            handleEditButton();
          }}
        >
          {editMode ? <FiSave className="action-icon" /> : <MdOutlineModeEditOutline className="action-icon" />}
        </span>

        <MdDeleteOutline className="action-icon" onClick={() => handleDelete(todo["id"])} />
      </section>
    </li>
  );
}

export default TodoItem;
