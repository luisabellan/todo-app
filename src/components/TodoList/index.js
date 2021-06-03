import React from 'react';
import Todo from '../Todo';
import PropTypes, { bool, number, string } from 'prop-types';

TodoList.propTypes = {
  todo: PropTypes.shape(
    {
      id: number,
      name: string,
      completed: bool
    }
  ),
  todos: PropTypes.arrayOf(PropTypes.object),
  toggleItem: PropTypes.func,
  handleChanges: PropTypes.func
};



function TodoList(props) {
  return (
    <div className="todolist-wrapper">
      <ul data-testid="todos-ul">
        {props.todos.map((todo) => (
          <Todo key={todo.id} handleChanges={props.handleChanges} todo={todo} toggleItem={props.toggleItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
