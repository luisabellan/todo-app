import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object,
};

function TodoList(props) {
  return (
    <div className="todolist-wrapper">
      <ul data-testid="todos-ul">
        {props.todos.map((item) => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
