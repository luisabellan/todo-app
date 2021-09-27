import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

import { i18n } from '@lingui/core';
import { messages as es } from './locales/es/messages.js';
import { messages as en } from './locales/en/messages.js';
import { messages as fr } from './locales/fr/messages.js';
import { messages as de } from './locales/de/messages.js';
import { messages as ar } from './locales/ar/messages.js';
import { messages as it } from './locales/it/messages.js';
import LanguageSelector from './components/LanguageSelector';
/* import { t } from '@lingui/macro';*/

i18n.load('es', es);
i18n.load('de', de);
i18n.load('fr', fr);
i18n.load('it', it);
i18n.load('ar', ar);
i18n.load('en', en);
i18n.activate('en');

function App() {
  let todoItems = [];
  localStorage.setItem('todos', JSON.stringify(todoItems));

  const [todos, setTodos] = useState(todoItems);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

  // saves todo on local storage
  const saveData = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Class methods to update state
  const addItem = (e, todo) => {
    e.preventDefault();

    const newTodoItem = {
      id: uuidv4(),
      note: todo,
      completed: false
    };
    todoItems = [...todos, newTodoItem];

    /* 
      /\S+/.test(item) 
      if 0 or more whitespace characters only item will not be added       
    */

    if (/\S+/g.test(todo)) {
      setTodos(todoItems);
      saveData(todoItems);
    }
  };

  const onToggle = (todoId) => {
    setTodos(
      todos.map((todo) => {
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
    todoItems = todos.filter((item) => item.completed === false);
    setTodos(todoItems);
    saveData(todoItems);
  };
  const clearAll = (e) => {
    e.preventDefault();
    todoItems = [];
    setTodos(todoItems);
    saveData(todoItems);
  };

  const onChangeLanguage = (language) => {
    i18n.activate(language);
  };

  return (
    <div className="app-wrapper" data-testid="app">
      <Header className="header" />
      <div className="main">
        <LanguageSelector language={en} onChangeLanguage={onChangeLanguage} />

        <TodoForm
          className="todoform"
          addItem={addItem}
          clearCompleted={clearCompleted}
          clearAll={clearAll}
        />
        <TodoList
          style={{ fontFamily: 'Indie Flower, monospaced' }}
          data-testid="todolist"
          todos={todos}
          className="todolist"
          onToggle={onToggle}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
