import { useContext } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ItemList from "./components/ItemList";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { todos, todoBeingEdited } =
    useContext(TodoContext);

  return (
    <main className="container">
      <section className="todo-container">
        <h1 className="heading1">Todo List</h1>

        <ItemList />
        <TodoForm
          key={todoBeingEdited}
          currentTodo={}
        />
      </section>
    </main>
  );
}

export default App;
