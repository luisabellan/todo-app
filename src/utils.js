
/* export default function saveData(newTodos) {

  localStorage.setItem('todos', JSON.stringify(newTodos));
} */

export const handleClick = (props) => {
  const { todo, toggleItem } = props;
  toggleItem(todo.id);
};
