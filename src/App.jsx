import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

const initialTodos = [
  {
    id: 0,
    description: "This is first todo",
    completed: true,
  },
  {
    id: 1,
    description: "This is the 2nd todo",
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

  const todoList = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <main>
      <AddTodo handleAdd={handleAdd} />
      <ul>{todoList}</ul>
    </main>
  );
}

export default App;
