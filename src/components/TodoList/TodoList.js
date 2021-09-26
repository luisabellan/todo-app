import React from 'react';
import Todo from '../Todo/Todo';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      note: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggle: PropTypes.func.isRequired
};

function TodoList(props) {
  return (
    <div className="todolist-wrapper" data-testid="todos">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          data-testid={`checkbox ${todo.note}`}
          todo={todo}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
