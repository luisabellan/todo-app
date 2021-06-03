/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    toggleItem: PropTypes.func,
    handleChanges: PropTypes.func
  }),

  toggleItem: PropTypes.func,
  handleChanges: PropTypes.func
};

export default function Todo(props) {
  const handleClick = () => {
    const { todo, toggleItem } = props;
    return toggleItem(todo.id);
  };
  return (
    <div className="task">
      <input
        type="checkbox"
        data-testid="checkbox"
        name={`item ${props.todo.name}`}
        value={props.todo.name}
        onClick={() => handleClick()}
        onChange={props.handleChanges}
        defaultChecked={props.todo.completed}
      ></input>
      <span data-testid="todo-output">{props.todo.name}</span>
    </div>
  );
}
