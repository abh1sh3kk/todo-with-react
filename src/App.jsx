import "./App.css";
import DataList from "./components/DataList";

function App() {
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
