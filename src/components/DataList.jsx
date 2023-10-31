import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function DataList() {
  const { data, renderItems } = useContext(DataContext);

  const dataList = data.map((item) => {
    return <li key={item.id}>{renderItems(item)}</li>;
  });

  return (
    <section className="app-list">
      <ul>{dataList}</ul>
    </section>
  );
}

export default DataList;
