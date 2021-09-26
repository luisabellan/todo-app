/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    note: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    toggleItem: PropTypes.func
  })
};

export default function Todo(props) {
  return (
    <div className="checkbox" data-testid="todo">
      <input
        type="checkbox"
        data-testid={`checkbox ${props.todo.note}`}
        name={`item ${props.todo.note}`}
        value={props.todo.note}
        onClick={() => props.toggleItem(props.todo.id)}
        defaultChecked={props.todo.completed}
      ></input>
      <span data-testid="todo-output">{props.todo.note}</span>
    </div>
  );
}
