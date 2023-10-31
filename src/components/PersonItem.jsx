import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const PersonItem = ({ item, isSelected }) => {
  const { handleSelect } = useContext(DataContext);

  return (
    <li
      className={isSelected ? "person-card card--selected" : "person-card"}
      onClick={() => {
        handleSelect(item.id);
      }}
    >
      <div className="person-card__head">
        <h3>{item.name}</h3>
        <p className="text-dim">{item.email}</p>
      </div>
      <div className="person-card__info">
        <p>
          <span>Address: </span>
          <span className="text-dim">{item.address}</span>
        </p>

        <p>
          <span>Date of birth: </span>
          <span className="text-dim">{item.dob}</span>
        </p>
      </div>
    </li>
  );
};

export default PersonItem;
