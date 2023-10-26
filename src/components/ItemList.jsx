import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

function ItemList() {
  const { todos, todoBeingEdited  } =
    useContext(TodoContext);
  const itemList = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        isTodoBeingEdited={todoBeingEdited === todo.id}
      />
    );
  });
  return <ul className="item-list">{itemList}</ul>;
}

export default ItemList;
