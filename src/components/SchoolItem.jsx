import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const SchoolItem = ({ item, isSelected }) => {
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
        <p className="text-dim">
          {item.address.streetNum} {item.address.city}
        </p>
      </div>
      <div className="person-card__info">
        <p>
          <span>Date Established: </span>
          <span className="text-dim">{item.establishedDate}</span>
        </p>

        <p>
          <span>Email: :</span>
          <span className="text-dim">{item.email}</span>
        </p>
      </div>
    </li>
  );
};

export default SchoolItem;
