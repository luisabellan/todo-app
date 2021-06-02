/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

/* item: PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  completed: PropTypes.bool,
}); */



Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    completed: PropTypes.bool,
    toggleItem: PropTypes.func,
    handleChanges: PropTypes.func
  }),

  toggleItem: PropTypes.func,
  handleChanges: PropTypes.func,
}

export default function Todo(props) {

  return (
    <div
      className="task"
    >
      <input
        type="checkbox"
        name={`item ${props.todo.name}`}
        value={props.todo.name}
        onClick={() => props.toggleItem(props.todo.id)}
        onChange={props.handleChanges}
        defaultChecked={props.todo.completed}
      ></input>
      <span data-testid="todo-output" >{props.todo.name}</span>
    </div>
  );
}