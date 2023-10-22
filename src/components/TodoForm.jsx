import { useCallback, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ handleAdd, existingIds }) {
  const [errorMsg, setErrorMsg] = useState("");

  const showError = useCallback(
    (message) => {
      setErrorMsg(message);

      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    },
    [errorMsg]
  );

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

  const validateForm = (form) => {
    if (form.title.length === 0) {
      showError("Title can't be empty");
      return false;
    }

    if (existingIds.includes(form.id)) {
      console.log("Nooo it already exists");
      return false;
    }
    return true;
  };

  const [newTodo, setNewTodo] = useState(defaultState);
  return (
    <form
      className="form add-todo"
      onSubmit={(e) => {
        e.preventDefault();
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
        {[
          { label: "High", value: "high" },
          { label: "Medium", value: "medium" },
          { label: "Low", value: "low" },
        ].map((priority) => (
          <label key={priority.value}>
            <input
              type="radio"
              name="priority"
              checked={priority.value === newTodo.priority}
              onChange={() => {
                setNewTodo((oldTodo) => ({
                  ...oldTodo,
                  priority: priority.value,
                }));
              }}
            />
            <span>{priority.label}</span>
          </label>
        ))}
      </div>

      <label>
        <span>Deadline: </span>
        <input
          type="date"
          id="deadline"
          name="deadline"
          min="2023-01-01"
          max="2024-12-12"
          value="2023-10-21"
          onChange={(e) => {
            setNewTodo((oldTodo) => ({
              ...oldTodo,
              deadline: e.target.value,
            }));
          }}
        />
      </label>

      <label>
        <span>Completed: </span>
        <input
          type="checkbox"
          id="isCompleted"
          name="completed"
          checked={newTodo.completed}
          onChange={() => {
            setNewTodo((oldTodo) => ({
              ...oldTodo,
              completed: !oldTodo.completed,
            }));
          }}
        />
      </label>

      <p className="error-msg">{errorMsg}</p>

      <button
        className="add-todo__btn"
        onClick={() => {
          if (validateForm(newTodo)) {
            const newId = uuidv4();
            const dateNow = new Date();
            const createdDate =
              dateNow.getFullYear() +
              "/" +
              dateNow.getMonth() +
              "/" +
              dateNow.getDate();
            console.log("Validated");

            setNewTodo(defaultState);
            handleAdd({
              ...newTodo,
              dateCreated: createdDate,
              id: newId,
            });
          } else {
            console.log("Not validated");
          }
        }}
      >
        <BsPlusLg />
        <span>Add</span>
      </button>
    </form>
  );
}

export default TodoForm;
