import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const TodoListItem = ({ item, isSelected }) => {
  const { handleSelect } = useContext(DataContext);
  return (
    <li
      className={isSelected ? "card--selected" : ""}
      onClick={() => {
        handleSelect(item.id);
      }}
    >
      <section className="todo__info">
        <div className="todo__details">
          <label htmlFor={`checkbox-${item.id}`} style={{ fontWeight: "bold" }}>
            {item.title}
          </label>
          <div>{item.description}</div>
          {item.deadline && <div>Deadline: {item.deadline}</div>}
          {item.dateModified && <div>Date Modified: {item.dateModified}</div>}
          <div>Date Created: {item.dateCreated}</div>
          <div>Priority: {item.priority}</div>
        </div>
      </section>
    </li>
  );
};

export default TodoListItem;
