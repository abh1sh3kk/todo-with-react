import { useState } from "react";

function AddTodo({ handleAdd }) {
  const [newTodo, setNewTodo] = useState({ description: "", completed: false });
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={newTodo.description}
        onChange={(e) => {
          setNewTodo((oldTodo) => ({
            ...oldTodo,
            description: e.target.value,
          }));
        }}
      />
      <button
        className="add-todo"
        onClick={() => {
          setNewTodo({ description: "", completed: false });
          handleAdd({
            ...newTodo,
            id: newTodo.description,
          });
        }}
      >
        +Add
      </button>
    </form>
  );
}

export default AddTodo;
