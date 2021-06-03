const handleClick = (props) => {
  return props.toggleItem(props.todo.id);
};

const clearCompleted = (e, todos, setTodos, saveData) => {
  e.preventDefault();
  let todoItems = todos.filter((item) => item.completed === false);
  setTodos(todoItems);
  saveData(todoItems);
};

const saveData = (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
};
module.exports = { handleClick, clearCompleted, saveData };
