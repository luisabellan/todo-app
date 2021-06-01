/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";
import "./Todo.scss";

/* item: PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  completed: PropTypes.bool,
}); */

Todo.propTypes = {
  item: PropTypes.object,
  toggleItem: PropTypes.func,
  handleChanges: PropTypes.func,
};

export default function Todo(props) {
  return (
    <div
      /* className={`item ${props.item.completed ? " completed" : ""}`}  */
      className="task"
      /*onClick={() => props.toggleItem(props.item.id)}*/
    >
      <input
        type="checkbox"
        name={`item ${props.item.name}`}
        value={props.item.name}
        onClick={() => props.toggleItem(props.item.id)}
        onChange={props.handleChanges}
        defaultChecked={props.item.completed}
      ></input>
      <span>{props.item.name}</span>
    </div>
  );
}
