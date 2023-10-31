const TodoListItem = ({ item }) => {
  return (
    <div className="">
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
    </div>
  );
};

export default TodoListItem;
