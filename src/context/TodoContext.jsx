/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext(null);
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReduer, importedTodos);
  const [todoBeingEdited, setTodoBeingEdited] = useState(null);
  return (
    <TodoContext.Provider
      value={{ todos, dispatch, todoBeingEdited, setTodoBeingEdited }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

const todoReduer = (state, action) => {
  switch (action.type) {
    case "add_todo": {
      return [...state, action.todo];
    }
    case "remove_todo": {
      return state.filter((item) => item.id !== action.id);
    }
    case "edit_todo": {
      return state.map((item) => {
        if (item.id === action.todo.id) return action.todo;
        return item;
      });
    }
    case "toggle_todo_state": {
      return state.map((item) => {
        if (item.id === action.id)
          return { ...item, completed: action.completed };
        return item;
      });
    }
    case "set_todo_state": {
      console.log(action.id, action.completed);
      console.log("I do what I am asked to do.");
      break;
    }
    default: {
      console.log("hmmm, I don't know what is supposed to be done.");
    }
  }
  return state;
};

const importedTodos = [
  {
    id: "70fdaa08-8d33-40a0-9bf8-5e785ea04be5",
    title: "Boricua's Bond",
    description: "In sagittis dui vel nisl. Duis ac nibh.",
    deadline: "2022/11-09",
    dateCreated: "2023-09-24",
    dateModified: "",
    priority: "high",
    completed: false,
    category: "Movie",
  },
  {
    id: "bcf36b94-7e47-4d49-aabd-23e3cf2071d1",
    title: "Deep, The (Djúpið)",
    description:
      "Nula facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    deadline: "",
    dateCreated: "2022-11-04",
    dateModified: "",
    priority: "low",
    completed: false,
    category: "Chores",
  },
  {
    id: "4f5b5471-4363-4120-9a85-b4ac1d44e9a6",
    title: "House of Sand (Casa de Areia)",
    description: "",
    deadline: "2022-12-29",
    dateCreated: "2023-05-09",
    dateModified: "",
    completed: true,
    priority: "low",
    category: "Movie",
  },
  {
    id: "6d11f24f-8467-4d2b-b33a-30299644a46f",
    title: "Ministry of Fear",
    description: "",
    deadline: "",
    dateCreated: "2023-02-24",
    dateModified: "2023-07-24",
    priority: "low",
    completed: false,
    category: "Chores",
  },
  {
    id: "735e700f-37a9-432f-88f6-6beaee5e965f",
    title: "Clonehunter",
    description: "Phasellus id sapien in sapien iaculis congue.",
    deadline: "2023-05-10",
    dateCreated: "2022-12-26",
    dateModified: "",
    completed: true,
    priority: "low",
    category: "Chores",
  },
  {
    id: "d0ea1018-3c81-4253-ac30-17c6125b5b70",
    title: "Hitcher, The",
    description: "Vestibulum sed magna at nunc commodo placerat.",
    deadline: "",
    dateCreated: "2022-12-19",
    dateModified: "",
    completed: true,
    priority: "high",
    category: "Office",
  },
  {
    id: "517027eb-1bc1-4533-9244-c137361386d0",
    title: "That Uncertain Feeling",
    description: "Donec quis orci eget orci vehicula condimentum.",
    deadline: "2023-02-07",
    dateCreated: "2022-12-08",
    dateModified: "2023-08-20",
    priority: "medium",
    category: "Office",
  },
  {
    id: "2826267f-8580-47ba-8c58-d0a7a9b69324",
    title: "Top Banana",
    description: "Aliquam non mauris. Morbi non lectus.",
    deadline: "",
    dateCreated: "2023-06-20",
    dateModified: "",
    priority: "low",
    completed: true,
    category: "Movie",
  },
  {
    id: "74f428a5-5a48-4f1a-95bd-f0ef1683bfd7",
    title: "One Body Too Many",
    description: "",
    deadline: "",
    dateCreated: "2023-03-09",
    dateModified: "2023-08-17",
    priority: "high",
    completed: false,
    category: "Office",
  },
  {
    id: "0fd46382-9c5a-488a-8ed3-3f8e74628b2e",
    title: "Landet som icke är",
    description: "In hac habitasse platea dictumst.",
    deadline: "",
    dateCreated: "2023-01-17",
    dateModified: "",
    priority: "medium",
    completed: true,
    category: "Academics",
  },
  {
    id: "e5ca9b42-2ef3-4d45-a136-0d789035d5e1",
    title: "Bless Me, Ultima",
    description: "",
    deadline: "",
    dateCreated: "2023-01-31",
    dateModified: "",
    priority: "low",
    completed: true,
    category: "Academics",
  },
  {
    id: "26a4d782-f463-4ed0-8a64-70f9aa3fb05c",
    title: "In the Name of the King 2: Two Worlds",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. a nisl.",
    deadline: "",
    dateCreated: "2023-07-07",
    dateModified: "2023-03-18",
    completed: true,
    priority: "medium",
    category: "Academics",
  },
  {
    id: "3fcf0865-814e-44f2-9bf4-fcf2bbc51b0d",
    title:
      "Manufacturing Reality: Slavoj Zizek and the Reality of the Virtual (Slavoj Zizek: The Reality of the Virtual)",
    description: "Nula tempus. Vivamus in felis eu sapien cursus vestibulum.",
    deadline: "",
    dateCreated: "2023-05-25",
    completed: false,
    dateModified: "2023-01-20",
    priority: "low",
    category: "Movie",
  },
  {
    id: "b6155976-5a0d-4266-b17f-af7f2cac92cf",
    title: "Suspect Zero",
    description: "Suspendisse accumsan tortor quis turpis.",
    deadline: "2023-09-01",
    dateCreated: "2023-02-28",
    dateModified: "2023-08-20",
    priority: "low",
    completed: false,
    category: "Academics",
  },
  {
    id: "1c46cce8-0223-490b-a623-457fe6de564b",
    title: "Breakfast Club, The",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nula.",
    deadline: "",
    dateCreated: "2023-06-06",
    dateModified: "",
    completed: false,
    priority: "high",
    category: "Others",
  },
];
