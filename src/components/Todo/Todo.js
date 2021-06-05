/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }),

  toggleItem: PropTypes.func,
  handleChanges: PropTypes.func
};

export default function Todo(props) {

  const todoInitialState = {
    id: "",
    name: "",
    completed: false
  }

  const [todo, setTodo] = useState(todoInitialState)


  return (
    <div className="checkbox" data-testid="todo">
      <input
        type="checkbox"
        data-testid={`checkbox ${props.todo.name}`}
        name={`item ${props.todo.name}`}
        value={props.todo.name}
        onClick={() => props.toggleItem(props.todo.id)}
        onChange={props.handleChanges}
        defaultChecked={props.todo.completed}
      ></input>
      <span data-testid="todo-output">{props.todo.name}</span>
    </div >
  );
}
