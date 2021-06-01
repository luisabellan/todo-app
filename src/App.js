import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

import "./App.scss";

function App() {
  let todoItems = [];

  const [todos, setTodos] = useState(todoItems);

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  // Class methods to update state
  const addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };
    let todoItems = [...todos, newItem];
    setTodos(todoItems);
    saveData(todoItems);
  };

  const toggleItem = (itemId) => {
    // console.log(itemId);

    setTodos(
      todos.map((item) => {
        // console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      }),
    );
  };
  const clearCompleted = (e) => {
    e.preventDefault();
    let todoItems = todos.filter((item) => item.completed === false);
    setTodos(todoItems);
    saveData(todoItems);
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
        {/* {console.log(todos)} */}
        <TodoList className="todolist" todos={todos} toggleItem={toggleItem} />
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
