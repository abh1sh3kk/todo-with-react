import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ItemList from "./components/ItemList";

const importedTodos = [
  {
    id: "70fdaa08-8d33-40a0-9bf8-5e785ea04be5",
    title: "Boricua's Bond",
    description: "In sagittis dui vel nisl. Duis ac nibh.",
    deadline: "2022/11/09",
    dateCreated: "2023/09/24",
    dateModified: null,
    priority: "high",
    completed: false,
    category: "Movie",
  },
  {
    id: "bcf36b94-7e47-4d49-aabd-23e3cf2071d1",
    title: "Deep, The (Djúpið)",
    description:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    deadline: null,
    dateCreated: "2022/11/04",
    dateModified: null,
    priority: "low",
    completed: false,
    category: "Chores",
  },
  {
    id: "4f5b5471-4363-4120-9a85-b4ac1d44e9a6",
    title: "House of Sand (Casa de Areia)",
    description: null,
    deadline: "2022/12/29",
    dateCreated: "2023/05/09",
    dateModified: null,
    completed: true,
    priority: "low",
    category: "Movie",
  },
  {
    id: "6d11f24f-8467-4d2b-b33a-30299644a46f",
    title: "Ministry of Fear",
    description: null,
    deadline: null,
    dateCreated: "2023/02/24",
    dateModified: "2023/07/24",
    priority: "low",
    completed: false,
    category: "Chores",
  },
  {
    id: "735e700f-37a9-432f-88f6-6beaee5e965f",
    title: "Clonehunter",
    description: "Phasellus id sapien in sapien iaculis congue.",
    deadline: "2023/05/10",
    dateCreated: "2022/12/26",
    dateModified: null,
    completed: true,
    priority: "low",
    category: "Chores",
  },
  {
    id: "d0ea1018-3c81-4253-ac30-17c6125b5b70",
    title: "Hitcher, The",
    description: "Vestibulum sed magna at nunc commodo placerat.",
    deadline: null,
    dateCreated: "2022/12/19",
    dateModified: null,
    completed: true,
    priority: "high",
    category: "Office",
  },
  {
    id: "517027eb-1bc1-4533-9244-c137361386d0",
    title: "That Uncertain Feeling",
    description: "Donec quis orci eget orci vehicula condimentum.",
    deadline: "2023/02/07",
    dateCreated: "2022/12/08",
    dateModified: "2023/08/20",
    priority: "medium",
    category: "Office",
  },
  {
    id: "2826267f-8580-47ba-8c58-d0a7a9b69324",
    title: "Top Banana",
    description: "Aliquam non mauris. Morbi non lectus.",
    deadline: null,
    dateCreated: "2023/06/20",
    dateModified: null,
    priority: "low",
    completed: true,
    category: "Movie",
  },
  {
    id: "74f428a5-5a48-4f1a-95bd-f0ef1683bfd7",
    title: "One Body Too Many",
    description: null,
    deadline: null,
    dateCreated: "2023/03/09",
    dateModified: "2023/08/17",
    priority: "high",
    completed: false,
    category: "Office",
  },
  {
    id: "0fd46382-9c5a-488a-8ed3-3f8e74628b2e",
    title: "Landet som icke är",
    description: "In hac habitasse platea dictumst.",
    deadline: null,
    dateCreated: "2023/01/17",
    dateModified: null,
    priority: "medium",
    completed: true,
    category: "Academics",
  },
  {
    id: "e5ca9b42-2ef3-4d45-a136-0d789035d5e1",
    title: "Bless Me, Ultima",
    description: null,
    deadline: null,
    dateCreated: "2023/01/31",
    dateModified: null,
    priority: "low",
    completed: true,
    category: "Academics",
  },
  {
    id: "26a4d782-f463-4ed0-8a64-70f9aa3fb05c",
    title: "In the Name of the King 2: Two Worlds",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    deadline: null,
    dateCreated: "2023/07/07",
    dateModified: "2023/03/18",
    completed: true,
    priority: "medium",
    category: "Academics",
  },
  {
    id: "3fcf0865-814e-44f2-9bf4-fcf2bbc51b0d",
    title:
      "Manufacturing Reality: Slavoj Zizek and the Reality of the Virtual (Slavoj Zizek: The Reality of the Virtual)",
    description: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    deadline: null,
    dateCreated: "2023/05/25",
    completed: false,
    dateModified: "2023/01/20",
    priority: "low",
    category: "Movie",
  },
  {
    id: "b6155976-5a0d-4266-b17f-af7f2cac92cf",
    title: "Suspect Zero",
    description: "Suspendisse accumsan tortor quis turpis.",
    deadline: "2023/09/01",
    dateCreated: "2023/02/28",
    dateModified: "2023/08/20",
    priority: "low",
    completed: false,
    category: "Academics",
  },
  {
    id: "1c46cce8-0223-490b-a623-457fe6de564b",
    title: "Breakfast Club, The",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    deadline: null,
    dateCreated: "2023/06/06",
    dateModified: null,
    completed: false,
    priority: "high",
    category: "Others",
  },
];

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
  const [todos, setTodos] = useState(importedTodos);

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
        <TodoForm handleAdd={handleAdd} />
      </section>
    </main>
  );
}

export default App;
