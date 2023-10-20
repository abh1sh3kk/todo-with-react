import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function AddTodo({ handleAdd }) {
  const [newTodo, setNewTodo] = useState({ description: "", completed: false });
  return (
    <form className="form add-todo" onSubmit={(e) => e.preventDefault()}>
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
      <button
        className="add-todo__btn"
        onClick={() => {
          setNewTodo({ description: "", completed: false });
          handleAdd({
            ...newTodo,
            id: newTodo.description,
          });
        }}
      >
        <BsPlusLg />
        <span>Add</span>
      </button>
    </form>
  );
}

export default AddTodo;
