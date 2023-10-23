import { useCallback, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

const emptyState = {
  title: "",
  description: "",
  completed: false,
  dateCreated: "",
  dateModified: "",
  deadline: "",
  priority: "medium",
  category: "",
};

function TodoForm({ handleAdd, currentTodo }) {
  const [newTodo, setNewTodo] = useState(currentTodo || emptyState);

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

  const validateForm = (form) => {
    if (form.title.length === 0) {
      showError("× Title can't be empty");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm(newTodo)) {

      const dateNow = new Date();
      const formattedDate =
        dateNow.getFullYear() +
        "/" +
        dateNow.getMonth() +
        "/" +
        dateNow.getDate();

      setNewTodo(emptyState);

      if (!!currentTodo) {
        handleAdd({ ...newTodo, dateModified: formattedDate });
        return;
      }

      const newId = uuidv4();
      handleAdd({
        ...newTodo,
        dateCreated: formattedDate,
        id: newId,
      });
    }
  };

  const handleFormChange = (e) => {
    let newValue = e.target.value;

    if (e.target.type === "checkbox") {
      newValue = e.target.checked;
    }

    if (e.target.name === "priority") {
      newValue = e.target.getAttribute("data-priority");
    }

    setNewTodo((oldTodo) => ({
      ...oldTodo,
      [e.target.name]: newValue,
    }));
  };

  return (
    <form
      className="form add-todo"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label className="add-todo__field">
        <span>Title</span>
        <input
          type="text"
          className="add-todo__input"
          name="title"
          value={newTodo.title}
          onChange={handleFormChange}
        />{" "}
      </label>

      <label className="add-todo__field">
        <span>Description</span>
        <input
          type="text"
          className="add-todo__input"
          value={newTodo.description}
          name="description"
          onChange={handleFormChange}
        />
      </label>

      <label className="add-todo__field">
        <span>Category</span>
        <input
          type="text"
          className="add-todo__input"
          name="category"
          value={newTodo.category}
          onChange={handleFormChange}
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
              data-priority={priority.value}
              onChange={handleFormChange}
            />
            <span>{priority.label}</span>
          </label>
        ))}
      </div>

      <label>
        <span>Deadline: </span>
        <input
          className="date-input"
          type="date"
          id="deadline"
          name="deadline"
          min="2023-01-01"
          max="2024-12-12"
          value={newTodo.deadline}
          // value="2022-01-21"
          onChange={handleFormChange}
        />
      </label>

      <label>
        <span>Completed: </span>
        <input
          type="checkbox"
          id="isCompleted"
          name="completed"
          checked={newTodo.completed}
          onChange={handleFormChange}
        />
      </label>

      <p className="error-msg">{errorMsg}</p>

      <section className="btn-container">
        <button type="submit" className="btn add-todo__btn">
          {!currentTodo ? (
            <>
              <BsPlusLg />
              <span>Add</span>
            </>
          ) : (
            <span>Save</span>
          )}
        </button>
        <button
          className="btn add-todo__btn--reset"
          type="reset"
          onClick={() => setNewTodo(emptyState)}
        >
          <span>Reset</span>
        </button>
      </section>
    </form>
  );
}

export default TodoForm;
