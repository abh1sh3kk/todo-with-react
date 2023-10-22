import TodoItem from "./TodoItem";

function ItemList({ todos, handleChecked, handleDelete, handleEdit }) {
  const itemList = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    );
  });
  return <ul className="item-list">{itemList}</ul>;
}

export default ItemList;
