import { useState } from "react";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { FiSave } from "react-icons/fi";

function TodoItem({ todo, handleChecked, handleDelete, handleEdit }) {
  const [editedTodo, setEditedTodo] = useState(todo.title);
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleEditButton = () => {
    if (editMode) {
      handleEdit({ ...todo, title: editedTodo });
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
          className="todo__checkbox"
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
          <div className="todo__details">
            <label
              htmlFor={`checkbox-${todo.id}`}
              style={{ fontWeight: "bold" }}
            >
              {todo.title}
            </label>
            <div>{todo.description}</div>
            {todo.deadline && <div>Deadline: {todo.deadline}</div>}
            {todo.dateModified && <div>Date Modified: {todo.dateModified}</div>}
            <div>Date Created: {todo.dateCreated}</div>
            <div>Priority: {todo.priority}</div>
          </div>
        )}
      </section>

      <section className="todo__actions">
        <span
          onClick={() => {
            handleEditButton();
          }}
        >
          {editMode ? (
            <FiSave className="action-icon" />
          ) : (
            <MdOutlineModeEditOutline className="action-icon" />
          )}
        </span>

        <MdDeleteOutline
          className="action-icon"
          onClick={() => handleDelete(todo["id"])}
        />
      </section>
    </li>
  );
}

export default TodoItem;
