import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ShowItem from "./ShowItem";

function DataList() {
  const { data, schema } = useContext(DataContext);

  const dataList = data.map((item) => {
    return (
      <li key={item.id}>
        <ShowItem item={item} />
      </li>
    );
  });

  return (
    <section>
      <ul>{dataList}</ul>
    </section>
  );
}

export default DataList;
