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
    todo: ''
  };
  const [state, setState] = useState(initialState);

  const handleChanges = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.addItem(e, state.todo);
    setState({ todo: '' });
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
              value={state.todo}
              placeholder={translation}
              name="todo"
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
