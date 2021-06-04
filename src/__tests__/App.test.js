import React, { useState, useEffect } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';


describe('App', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });


  it('renders:title, Text input field, Add button, Clean button and footer', () => {
    render(<App />);
    const title = screen.getByText(/Todo App/);
    const placeholder = screen.getByPlaceholderText(/New Task/);
    const addTodoButton = screen.getByText(/Add/);
    const cleanTodoButton = screen.getByText(/Clean/);
    const footer = screen.getByText(/Made with 💓 and ☕ by/);
    const footerLink = screen.getByText(/Luis Abellan/);

    expect(title).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
    expect(cleanTodoButton).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(footerLink).toBeInTheDocument();
  });






  // Clear item
  test('clear item', () => {
    const onChange = jest.fn()
    render(<App />)
    const checkbox = screen.getByTestId('checkbox')
    const cleanButton = screen.getByText('Clean')
    userEvent.click(checkbox)
    userEvent.click(cleanButton)
    expect(checkbox).not.toBeChecked()
  })



  //setTodos

  /*   test('setTodos', () => {
      render(<App />)
      let todos = [];
      let Newtodos = [{ id: 1, name: 'buy bananas', completed: false }];
      setTodos(JSON.parse(Newtodos));
      let currentItems = localStorage.getItem('todos');
  
      let todoItems = [];
  
      expect(todos).toBe(JSON.parse(currentItems));
  
    });
   */


  // localStorage.setItem fun
  test('localStorage.setItem fun', () => {
    render(<App />)
    let newItem = { id: 1, name: 'buy bananas', completed: false };
    localStorage.setItem('todos', []);
    let currentTodos = localStorage.getItem('todos')
    localStorage.setItem('todos', JSON.stringify([newItem]));
    let expected = localStorage.getItem('todos');
    let received = JSON.stringify([newItem]);
    expect(expected).toBe(received);
  });


  const saveData = (newTodos) => {

    localStorage.setItem('todos', JSON.stringify(newTodos));
  }



});
