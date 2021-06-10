import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  let todoItems = [];

  const [todos, setTodos] = useState(todoItems);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);



  // saves todo on local storage
  const saveData = (newTodos) => {

    localStorage.setItem('todos', JSON.stringify(newTodos));
  }


  // Class methods to update state
  const addItem = (e, todo) => {
    e.preventDefault();

    const newItem = {
      //todo item ${item.note}`,
      id: Date.now().toString(),
      note: todo,
      completed: false
    };
    let todoItems = [...todos, newItem];

    /* 
      /\S+/.test(item) 
      if 0 or more whitespace characters only item will not be added       
    */

    if (/\S+/.test(todo)) {
      setTodos(todoItems);
      saveData(todoItems);

    }
  };



  const toggleItem = (todoId) => {
    // console.log(itemId);

    setTodos(
      todos.map((todo) => {
        // console.log(item);
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    );
  };
  const clearCompleted = (e) => {
    e.preventDefault();
    let todoItems = todos.filter((item) => item.completed === false);
    setTodos(todoItems);
    saveData(todoItems);
  };
  const clearAll = (e) => {
    e.preventDefault();
    let todoItems = []
    setTodos(todoItems);
    saveData(todoItems);
  };



  return (
    <div className="app-wrapper" data-testid="app">

      <Header className="header" />
      <div className="main">
        <TodoForm
          className="todoform"
          addItem={addItem}
          clearCompleted={clearCompleted}
          clearAll={clearAll}
        />
        {/* {console.log(todos)} */}
        <TodoList style={{ fontFamily: 'Indie Flower, monospaced' }} data-testid="todolist" todos={todos} className="todolist" toggleItem={toggleItem} />
      </div >
      <Footer />
    </div >
  )
}

export default App;
