import React from 'react';
import Todo from '../Todo/Todo';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggle: PropTypes.func.isRequired
};

function TodoList(props) {
  const { todos, onToggle } = props;
  return (
    <div className="todolist-wrapper" data-testid="todos">
      {todos.map((todo, idx) => (
        <Todo
          key={todo.id}
          /* data-testid={`checkbox ${todo.note}`}*/
          todo={todo}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
