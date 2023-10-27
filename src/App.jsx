import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  return (
    <main className="container">
      <section className="todo-container">
        <h1 className="heading1">Todo List</h1>

        <ItemList />
      </section>
    </main>
  );
}

export default App;
