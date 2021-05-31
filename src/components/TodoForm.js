import React, { useState } from "react";

export default function TodoForm(props) {
  const initialState = {
    todoItem1: "",
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
    setState({ todoItem1: "" });
  };

  // console.log('rendering form', state.todoItem);

  return (
    <>
      <form onSubmit={submitItem}>
        <h2>New Task</h2>
        <input
          type="text"
          data-testid="todo-input"
          value={state.todoItem1}
          name="todoItem1"
          onChange={handleChanges}
          placeholder="New task"
        />
        /
        <button
          className="add-to-do-btn"
          style={{
            fontFamily: "Jomhuria,sans-serif",
            outline: "none",
            fontSize: "3.2rem",
          }}
        >
          <span>Add</span>
        </button>
        <button
          className="clear-btn"
          onClick={props.clearCompleted}
          style={{
            fontFamily: "Jomhuria,sans-serif",
            outline: "none",
            fontSize: "3.2rem",
          }}
        >
          <span>Clean</span>
        </button>
      </form>
    </>
  );
}
