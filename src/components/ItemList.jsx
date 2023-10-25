import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

function ItemList({
  todoBeingEdited,
  setTodoBeingEdited,
}) {
  const todos = useContext(TodoContext);
  const itemList = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        todoBeingEdited={todoBeingEdited}
        setTodoBeingEdited={setTodoBeingEdited}
      />
    );
  });
  return <ul className="item-list">{itemList}</ul>;
}

export default ItemList;
