import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GoogleFontLoader from 'react-google-font-loader';

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
  const addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    let todoItems = [...todos, newItem];

    /* 
        /\S+/.test(item) 
        if 0 or more whitespace characters only item will not be added       
    */

    if (/\S+/.test(item)) {
      setTodos(todoItems);
      saveData(todoItems);

    }
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
    <div className="app-wrapper" data-testid="app">
      <GoogleFontLoader
        fonts={[
          {
            font: 'Indie Flower',
            weights: [800, '4000'],
          },
          {
            font: 'Indie Flower',
            weights: [800, 900],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <Header className="header" />
      <div className="main">
        <TodoForm
          className="todoform"
          addItem={addItem}
          clearCompleted={clearCompleted}
        />
        {/* {console.log(todos)} */}
        <TodoList style={{ fontFamily: 'Indie Flower, monospaced' }} data-testid="todolist" className="todolist" todos={todos} toggleItem={toggleItem} />
      </div >
      <Footer />
    </div >
  )
}

export default App;
