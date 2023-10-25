import { useContext, useReducer, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ItemList from "./components/ItemList";
import { TodoContext } from "./context/TodoContext";

function App() {
  const [todoBeingEdited, setTodoBeingEdited] = useState(null);
  const todos = useContext(TodoContext);

  return (
    <main className="container">
      <section className="todo-container">
        <h1 className="heading1">Todo List</h1>

        <ItemList
          todoBeingEdited={todoBeingEdited}
          setTodoBeingEdited={setTodoBeingEdited}
        />
        <TodoForm
          key={todoBeingEdited}
          currentTodo={todos.find((item) => item.id === todoBeingEdited)}
          setTodoBeingEdited={setTodoBeingEdited}
        />
      </section>
    </main>
  );
}

export default App;
