/* const handleClick = (props) => {
  return props.toggleItem(props.todo.id);
};

const clearCompleted = (e, todos, setTodos, saveData) => {
  e.preventDefault();
  let todoItems = todos.filter((item) => item.completed === false);
  setTodos(todoItems);
  saveData(todoItems);
};
 */
export default function saveData(newTodos) {

  localStorage.setItem('todos', JSON.stringify(newTodos));
}

export const handleClick = (props) => {
  const { todo, toggleItem } = props;
  return toggleItem(todo.id);
};
