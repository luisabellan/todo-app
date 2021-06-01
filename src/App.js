import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import "./App.scss";

function App() {
  let todoItems = [
    /* {
      name: `buy bread`,
      id: Date.now(),
      completed: false,
    }, */
  ];

  let todoItem = "";

  const initialState = {
    todoItems,
    todoItem,
  };
  const [state, setState] = useState(initialState);

  // Class methods to update state
  const addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    setState({
      todoItems: [...state.todoItems, newItem],
    });
  };

  const toggleItem = (itemId) => {
    // console.log(itemId);

    setState({
      todoItems: state.todoItems.map((item) => {
        // console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      }),
    });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    setState({
      // returns the items that haven't been completed and purges
      // the ones that have been completed
      todoItems: state.todoItems.filter((item) => item.completed === false),
    });
  };

  return (
    <div className="app-wrapper">
      <Header className="header" />
      <div className="main">
        <TodoForm
          className="todoform"
          addItem={addItem}
          clearCompleted={clearCompleted}
        />
        <TodoList
          className="todolist"
          todoItems={state.todoItems}
          toggleItem={toggleItem}
        />
      </div>

      <footer className="footer">
        <span className="copyright">
          Made with 💓 and ☕ by <a href="https://luisabellan.com">Luis Abellan</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
