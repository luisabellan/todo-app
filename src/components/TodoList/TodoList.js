import React from 'react';
import Todo from '../Todo/Todo';



function TodoList(props) {
  return (
    <div className="todolist-wrapper" data-testid="checkbox">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          handleChanges={props.handleChanges}
          todo={todo}
          toggleItem={props.toggleItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
