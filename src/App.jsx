import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ItemList from "./components/ItemList";

const initialTodos = [
  {
    id: 2,
    description: "Buy groceries",
    completed: false,
  },
  {
    id: 3,
    description: "Finish homework",
    completed: false,
  },
  {
    id: 5,
    description: "Go for a run",
    completed: false,
  },
  {
    id: 6,
    description: "Read a book",
    completed: false,
  },
  {
    id: 7,
    description: "Write a report",
    completed: false,
  },
  {
    id: 8,
    description: "Plan a weekend trip",
    completed: true,
  },
  {
    id: 9,
    description: "Learn a new language",
    completed: false,
  },
  {
    id: 10,
    description: "Paint a picture",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleChecked = (id, isCompleted) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: isCompleted,
            }
          : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  const handleAdd = (todo) => {
    console.log(todo);
    setTodos((oldTodos) => [...oldTodos, todo]);
  };

  const handleEdit = (editedTodo) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  return (
    <main className="container">
      <section className="todo-container">
        <h1 className="heading1">Todo List</h1>

        <ItemList
          todos={todos}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <AddTodo handleAdd={handleAdd} />
      </section>
    </main>
  );
}

export default App;
