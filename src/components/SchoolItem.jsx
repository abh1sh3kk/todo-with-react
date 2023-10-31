const SchoolItem = ({ item }) => {
  return (
    <section className="person-card">
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
    </section>
  );
};

export default SchoolItem;
