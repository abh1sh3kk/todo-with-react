import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Item from "./Item";

function ShowItem({ item }) {
  const { schema } = useContext(DataContext);

  const itemDetails = [];

  for (const key in item) {
    schema.forEach((schemaObj) => {
      if (schemaObj.fields.includes(key)) {
        const itemToDisplay = (
          <div key={key}>
            <span>{schemaObj.title}: </span>
            <span>{item[key]}</span>
          </div>
        );
        itemDetails.push(itemToDisplay);
      }
    });
  }

  return <div>{itemDetails}</div>;
}

export default ShowItem;
