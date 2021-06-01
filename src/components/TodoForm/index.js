import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  addItem: PropTypes.func,
  clearCompleted: PropTypes.func
};

export default function TodoForm(props) {
  const initialState = {
    todoItem1: ''
  };
  const [state, setState] = useState(initialState);

  const handleChanges = (e) => {
    // update state with each keystroke
    // console.log(e)
    setState({ [e.target.name]: e.target.value });
    // console.log(state);
  };

  // class property to submit form
  const submitItem = (e) => {
    e.preventDefault();
    //console.log(props);
    props.addItem(e, state.todoItem1);
    setState({ todoItem1: '' });
  };

  // console.log('rendering form', state.todoItem);

  return (
    <>
      <form onSubmit={submitItem}>
        <input
          type="text"
          data-testid="todo-input"
          value={state.todoItem1}
          placeholder="New Task"
          name="todoItem1"
          onChange={handleChanges}
        ></input>

        <button className="add-to-do-btn">
          <span>Add</span>
        </button>
        <button className="clear-btn" onClick={props.clearCompleted}>
          <span>Clean</span>
        </button>
      </form>
    </>
  );
}
