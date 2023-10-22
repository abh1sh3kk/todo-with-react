import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function TodoForm({ handleAdd }) {
  const defaultState = {
    title: "",
    description: "",
    completed: false,
    dateCreated: "",
    dateModified: "",
    deadline: "",
    priority: "medium",
    category: "",
  };
  const [newTodo, setNewTodo] = useState(defaultState);
  return (
    <form
      className="form add-todo"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(newTodo);
      }}
    >
      <label className="add-todo__field">
        <span>Title</span>
        <input
          type="text"
          className="add-todo__input"
          value={newTodo.title}
          onChange={(e) => {
            setNewTodo((oldTodo) => ({
              ...oldTodo,
              title: e.target.value,
            }));
          }}
        />{" "}
      </label>

      <label className="add-todo__field">
        <span>Description</span>
        <input
          type="text"
          className="add-todo__input"
          value={newTodo.description}
          onChange={(e) => {
            setNewTodo((oldTodo) => ({
              ...oldTodo,
              description: e.target.value,
            }));
          }}
        />
      </label>

      <label className="add-todo__field">
        <span>Category</span>
        <input
          type="text"
          className="add-todo__input"
          value={newTodo.category}
          onChange={(e) => {
            setNewTodo((oldTodo) => ({
              ...oldTodo,
              category: e.target.value,
            }));
          }}
        />
      </label>

      <div className="add-todo__radio-grp">
        <span>Priority:</span>
        <label>
          <input type="radio" name="priority" />
          <span>High</span>
        </label>{" "}
        <label>
          <input type="radio" name="priority" />
          <span>Medium</span>
        </label>{" "}
        <label>
          <input type="radio" name="priority" />
          <span>Low</span>
        </label>
      </div>

      <label className="add-todo__field">
        <span>Deadline: </span>
        <input
          type="date"
          id="deadline"
          name="deadline"
          min="2023-01-01"
          max="2024-12-12"
          value="2023-10-21"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </label>

      <button
        className="add-todo__btn"
        onClick={() => {
          setNewTodo(defaultState);
          handleAdd({
            ...newTodo,
            id: newTodo.title,
          });
        }}
      >
        <BsPlusLg />
        <span>Add</span>
      </button>
    </form>
  );
}

export default TodoForm;
