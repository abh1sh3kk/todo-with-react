const PersonItem = ({ item }) => {
  return (
    <section className="person-card">
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
    </section>
  );
};

export default PersonItem;
