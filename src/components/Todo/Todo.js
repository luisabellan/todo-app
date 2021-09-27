/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default function Todo({ todo, onToggle }) {
  return (
    <div className="checkbox" data-testid="todo">
      <input
        type="checkbox"
        data-testid={`checkbox ${todo.note}`}
        name={`item ${todo.note}`}
        value={todo.note}
        onClick={() => onToggle(todo.id)}
        defaultChecked={todo.completed}
      ></input>
      <span data-testid="todo-output">{todo.note}</span>
    </div>
  );
}
