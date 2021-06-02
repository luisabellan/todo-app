import React from 'react';
import Todo from '../Todo';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  toggleItem: PropTypes.func
};

function TodoList(props) {
  return (
    <div className="todolist-wrapper">
      <ul data-testid="todos-ul">
        {props.todos.map((todo) => (
          <Todo data-testid="todo-output" key={todo.id} todo={todo} toggleItem={props.toggleItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
