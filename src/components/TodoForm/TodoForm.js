import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Trans } from '@lingui/macro';

TodoForm.propTypes = {
  addItem: PropTypes.func,
  clearCompleted: PropTypes.func,
  clearAll: PropTypes.func
};

export default function TodoForm(props) {
  const initialState = {
    todoItem1: ''
  };
  const [state, setState] = useState(initialState);

  const handleChanges = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  // class property to submit form
  const addTodo = (e) => {
    e.preventDefault();
    props.addItem(e, state.todoItem1);
    setState({ todoItem1: '' });
  };

  return (
    <div>
      <form onSubmit={addTodo} data-testid="form">
        <label htmlFor="text-input" aria-labelledby="text-input"></label>
        <Trans
          id="New task"
          render={({ translation }) => (
            <input
              id="text-input"
              type="text"
              className="input"
              data-testid="todo-input"
              value={state.todoItem1}
              placeholder={translation}
              name="todoItem1"
              onChange={handleChanges}
            ></input>
          )}
        />
        <div id="buttons">
          <div id="button-left">
            <button
              className="add-todo-btn"
              type="submit"
              data-testid="add-todo-button"
            >
              <span>
                <Trans>Add</Trans>
              </span>
            </button>
          </div>

          <div id="button-right">
            <button className="clear-btn" onClick={props.clearCompleted}>
              <span>
                <Trans>Done</Trans>
              </span>
            </button>

            <button className="del-btn" onClick={props.clearAll}>
              <span>
                <Trans>Delete</Trans>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
