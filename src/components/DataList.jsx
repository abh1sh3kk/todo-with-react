import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function DataList() {
  const { data, renderItems, selectedId } = useContext(DataContext);

  const dataList = data.map((item, index) => {
    let isItemSelected = item.id === selectedId;
    if (selectedId === null && index === 0) isItemSelected = true;
    return renderItems(item, isItemSelected);
  });

  return (
    <section className="app-list">
      <ul>{dataList}</ul>
    </section>
  );
}

export default DataList;
