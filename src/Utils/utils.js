export const handleChecked = (id, isCompleted, dispatch) => {
  dispatch({
    type: "toggle_todo_state",
    id: id,
    completed: isCompleted,
  });
};

export const handleDelete = (id, dispatch) => {
  dispatch({
    type: "remove_todo",
    id: id,
  });
};

export const handleWrite = (todo, dispatch) => {
  if (todo.find((item) => todo.id === item.id)) {
    handleEdit(todo, dispatch);
    return;
  }
  handleAdd(todo, dispatch);
};

export const handleAdd = (todo, dispatch) => {
  dispatch({
    type: "add_todo",
    todo: todo,
  });
};

export const handleEdit = (editedTodo, dispatch) => {
  dispatch({
    type: "edit_todo",
    todo: editedTodo,
  });
};
