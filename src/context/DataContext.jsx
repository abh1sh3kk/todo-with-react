import { createContext } from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const data = personData;
  const schema = initialSchema;

  return (
    <DataContext.Provider value={{ data, schema }}>
      {children}
    </DataContext.Provider>
  );
}

const personData = [
  {
    id: 12,
    name: "John",
    address: "address 1",
    dob: "1955/02/12",
    phoneNumber: "+977-9811111111",
    email: "john@gmail.com",
  },
  {
    id: 13,
    name: "Harry",
    address: "address 2",
    dob: "1980/05/23",
    phoneNumber: "+977-9822222222",
    email: "harry@gmail.com",
  },
];

const schoolData = [
  {
    id: 1,
    name: "school1",
    address: {
      city: "city1",
      streetNum: 234,
    },
    establishedDate: "1990-04-38",
    email: "school1@gmail.com",
  },
  {
    id: 2,
    name: "school2",
    address: {
      city: "city2",
      streetNum: 567,
    },
    establishedDate: "1995-02-23",
    email: "school2@gmail.com",
  },
];

const initialSchema = [
  {
    title: "Name",
    type: "name",
    tag: "name",
    fields: ["name", "full_name", "fullName"],
  },
  {
    title: "Date",
    type: "date",
    tag: "date",
    fields: ["dob", "date", "dateOfBirth", "establishedDate"],
  },
  {
    title: "Link",
    type: "url",
    tag: "url",
    fields: ["link", "url"],
  },
  {
    title: "Image",
    type: "image",
    tag: "img",
    fields: ["image", "imgLink", "picture"],
  },
  {
    title: "Address",
    type: "address",
    tag: "address",
    fields: ["address"],
  },
];
