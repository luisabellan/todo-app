import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todolist-wrapper">
      <ul data-testid="todos-ul">
        {props.todoItems.map((item) => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
