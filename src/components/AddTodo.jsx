import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function AddTodo({ handleAdd }) {
  const [newTodo, setNewTodo] = useState({ title: "", completed: false });
  return (
    <form className="form add-todo" onSubmit={(e) => e.preventDefault()}>
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
      />
      <button
        className="add-todo__btn"
        onClick={() => {
          setNewTodo({ title: "", completed: false });
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

export default AddTodo;
