import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoProvider from "./context/TodoContext.jsx";
import DataProvider from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </DataProvider>
  </React.StrictMode>
);
