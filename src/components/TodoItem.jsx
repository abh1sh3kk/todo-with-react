/* eslint-disable react/prop-types */
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";

function TodoItem({
  todo,
  handleChecked,
  handleDelete,
  todoBeingEdited,
  setTodoBeingEdited,
}) {
  const toggleTodoBeingEdited = () => {
    if (todoBeingEdited === todo.id) setTodoBeingEdited(null);
    else setTodoBeingEdited(todo.id);
  };

  const editMode = todoBeingEdited === todo.id;

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
            handleDelete(todo["id"]);
          }}
        />
      </section>
    </li>
  );
}

export default TodoItem;
