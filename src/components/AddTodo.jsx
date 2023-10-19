import { useState } from "react";

function AddTodo({ handleAdd }) {
  const [newTodo, setNewTodo] = useState({ description: "", completed: false });
  return (
    <>
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
    </>
  );
}

export default AddTodo;
