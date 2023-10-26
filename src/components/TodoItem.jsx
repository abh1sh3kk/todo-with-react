/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { TodoContext } from "../context/TodoContext";
import { handleDelete, handleChecked } from "../Utils/utils.js";

function TodoItem({ todo, isTodoBeingEdited: editMode }) {
  const { dispatch, setTodoBeingEdited } = useContext(TodoContext);

  const toggleTodoBeingEdited = () => {
    if (editMode) setTodoBeingEdited(null);
    else setTodoBeingEdited(todo.id);
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
            handleChecked(todo["id"], e.target.checked, dispatch);
          }}
        />

        <div className="todo__details">
          <label htmlFor={`checkbox-${todo.id}`} style={{ fontWeight: "bold" }}>
            {todo.title}
          </label>
          <div>{todo.description}</div>
          {todo.deadline && <div>Deadline: {todo.deadline}</div>}
          {todo.dateModified && <div>Date Modified: {todo.dateModified}</div>}
          <div>Date Created: {todo.dateCreated}</div>
          <div>Priority: {todo.priority}</div>
        </div>
      </section>
      <section className="todo__actions">
        <span>
          <MdOutlineModeEditOutline
            onClick={toggleTodoBeingEdited}
            style={editMode && { color: "violet" }}
            className="action-icon"
          />
        </span>

        <MdDeleteOutline
          className="action-icon"
          onClick={() => {
            handleDelete(todo["id"], dispatch);
          }}
        />
      </section>
    </li>
  );
}

export default TodoItem;
