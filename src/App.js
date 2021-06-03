import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Footer from './components/Footer';
import saveData from './utils';

import './App.scss';

function App(props) {
  let todoItems = [];

  const [todos, setTodos] = useState(todoItems);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  // Class methods to update state
  const addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
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
            completed: !item.completed
          };
        }

        return item;
      })
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
        <TodoList
          data-testid="todolist"
          className="todolist"
          todos={todos}
          toggleItem={toggleItem}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
