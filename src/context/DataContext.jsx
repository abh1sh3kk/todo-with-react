import { createContext } from "react";
import SchoolItem from "../components/SchoolItem";
import TodoListItem from "../components/TodoListItem";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const data = todoData;
  const renderItems = (item) => {
    return <TodoListItem item={item} />;
  };

  return (
    <DataContext.Provider value={{ data, renderItems }}>
      {children}
    </DataContext.Provider>
  );
}

const personData = [
  {
    id: 1,
    name: "Alice",
    address: "123 Main St, City 1",
    dob: "1990/07/15",
    phoneNumber: "+1-555-123-4567",
    email: "alice@example.com",
  },
  {
    id: 2,
    name: "Bob",
    address: "456 Elm St, City 2",
    dob: "1985/03/20",
    phoneNumber: "+1-555-987-6543",
    email: "bob@example.com",
  },
  {
    id: 3,
    name: "Eve",
    address: "789 Oak St, City 3",
    dob: "2000/11/10",
    phoneNumber: "+1-555-543-7890",
    email: "eve@example.com",
  },
  {
    id: 4,
    name: "David",
    address: "567 Pine St, City 2",
    dob: "1982/08/05",
    phoneNumber: "+1-555-222-3333",
    email: "david@example.com",
  },
  {
    id: 5,
    name: "Carol",
    address: "890 Cedar St, City 4",
    dob: "1978/04/25",
    phoneNumber: "+1-555-777-8888",
    email: "carol@example.com",
  },
  {
    id: 6,
    name: "Frank",
    address: "456 Birch St, City 1",
    dob: "1987/12/30",
    phoneNumber: "+1-555-444-9999",
    email: "frank@example.com",
  },
  {
    id: 7,
    name: "Grace",
    address: "123 Fir St, City 3",
    dob: "1995/06/22",
    phoneNumber: "+1-555-666-2222",
    email: "grace@example.com",
  },
  {
    id: 8,
    name: "Henry",
    address: "567 Willow St, City 1",
    dob: "1976/01/12",
    phoneNumber: "+1-555-555-1111",
    email: "henry@example.com",
  },
  {
    id: 9,
    name: "Ivy",
    address: "890 Maple St, City 2",
    dob: "1989/09/18",
    phoneNumber: "+1-555-112-2233",
    email: "ivy@example.com",
  },
  {
    id: 10,
    name: "Jack",
    address: "345 Redwood St, City 4",
    dob: "2002/03/08",
    phoneNumber: "+1-555-987-1111",
    email: "jack@example.com",
  },
];

const schoolData = [
  {
    id: 1,
    name: "School A",
    address: {
      city: "City 1",
      streetNum: 123,
    },
    establishedDate: "2000-05-15",
    email: "schoolA@example.com",
  },
  {
    id: 2,
    name: "School B",
    address: {
      city: "City 2",
      streetNum: 456,
    },
    establishedDate: "1998-11-30",
    email: "schoolB@example.com",
  },
  {
    id: 3,
    name: "School C",
    address: {
      city: "City 3",
      streetNum: 789,
    },
    establishedDate: "2005-03-22",
    email: "schoolC@example.com",
  },
  {
    id: 4,
    name: "School D",
    address: {
      city: "City 1",
      streetNum: 234,
    },
    establishedDate: "1992-07-10",
    email: "schoolD@example.com",
  },
  {
    id: 5,
    name: "School E",
    address: {
      city: "City 4",
      streetNum: 567,
    },
    establishedDate: "2002-09-18",
    email: "schoolE@example.com",
  },
  {
    id: 6,
    name: "School F",
    address: {
      city: "City 2",
      streetNum: 890,
    },
    establishedDate: "1999-01-25",
    email: "schoolF@example.com",
  },
  {
    id: 7,
    name: "School G",
    address: {
      city: "City 3",
      streetNum: 123,
    },
    establishedDate: "2003-12-03",
    email: "schoolG@example.com",
  },
  {
    id: 8,
    name: "School H",
    address: {
      city: "City 4",
      streetNum: 456,
    },
    establishedDate: "1997-08-21",
    email: "schoolH@example.com",
  },
  {
    id: 9,
    name: "School I",
    address: {
      city: "City 1",
      streetNum: 345,
    },
    establishedDate: "2001-04-09",
    email: "schoolI@example.com",
  },
  {
    id: 10,
    name: "School J",
    address: {
      city: "City 2",
      streetNum: 678,
    },
    establishedDate: "1996-06-17",
    email: "schoolJ@example.com",
  },
];

const todoData = [
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
