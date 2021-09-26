/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default function Todo(props) {
  return (
    <div className="checkbox" data-testid="todo">
      <input
        type="checkbox"
        data-testid={`checkbox ${props.todo.note}`}
        name={`item ${props.todo.note}`}
        value={props.todo.note}
        onClick={() => props.onToggle(props.todo.id)}
        defaultChecked={props.todo.completed}
      ></input>
      <span data-testid="todo-output">{props.todo.note}</span>
    </div>
  );
}
