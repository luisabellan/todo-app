/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";

Todo.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool,
  }),
  toggleItem: PropTypes.func,
};

export default function Todo(props) {
  return (
    <div
      className={`item ${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p style={{ fontFamily: "Indie Flower", fontSize: "2rem" }}>
        {props.item.name}
      </p>
    </div>
  );
}
