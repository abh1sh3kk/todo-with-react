import { useContext } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import TodoItem from "./components/TodoItem";
import { DataContext } from "./context/DataContext";
import DataList from "./components/DataList";

function App() {
  const renderTodoItem = (todo, todoBeingEdited) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      isTodoBeingEdited={todoBeingEdited === todo.id}
    />
  );

  const { data } = useContext(DataContext);

  return (
    <main className="container">
      <section className="todo-container">
        <h1 className="heading1">Display List</h1>
        <DataList />
      </section>
    </main>
  );
}

export default App;
