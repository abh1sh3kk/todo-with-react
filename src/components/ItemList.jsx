/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function ItemList({ renderTodoItem }) {
  const { todos, todoBeingEdited } = useContext(TodoContext);
  const itemList = todos.map((todo) => {
    return renderTodoItem(todo, todoBeingEdited);
  });
  return <ul className="item-list">{itemList}</ul>;
}

export default ItemList;
