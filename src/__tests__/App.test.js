import React, { useState, useEffect } from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import TodoList from '../components/TodoList';
import { saveData } from '../utils';

describe('App', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  cleanup();

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

  /*   test('click on checkbox', () => {
      render(
        <div>
          <label htmlFor="checkbox">Check</label>
          <input id="checkbox" type="checkbox" />
        </div>,
      )
  
      userEvent.click(screen.getByText('Check'))
      expect(screen.getByLabelText('Check')).toBeChecked()
    });
   */

  /*    // Clear item
    test('clear item', () => {
      const onChange = jest.fn()
      render(<input type="checkbox" onChange={onChange} />)
      const checkbox = screen.getByRole('checkbox')
      userEvent.dblClick(checkbox)
      expect(onChange).toHaveBeenCalledTimes(2)
      expect(checkbox).not.toBeChecked()
    })  */



  //setTodos

  /*  test('setTodos', () => {
     let todos = [];
     let Newtodos = [{ id: 1, name: 'buy bananas', completed: false }];
     setTodos(JSON.parse(Newtodos));
     let currentItems = localStorage.getItem('todos');
 
     let todoItems = [];
     let Newtodos = [{ id: 2, name: "go running", completed: false },]
 
     expect(todos).toBe(JSON.parse(currentItems));
 
   }); */



  // localStorage.setItem fun
  test('localStorage.setItem fun', () => {
    render(<App />)
    let newItem = { id: 1, name: 'buy bananas', completed: false };
    localStorage.setItem('todos', []);
    let currentTodos = localStorage.getItem('todos')
    console.log(JSON.stringify(currentTodos));
    console.log('Hello');
    localStorage.setItem('todos', JSON.stringify([newItem]));
    console.log(localStorage.getItem('todos'))
    //expect(localStorage.getItem('todos')).toHaveLength(1);
    //let currentItems = localStorage.getItem('todos');
    //console.log(currentItems);
    currentTodos = localStorage.getItem('todos')
    let expected = localStorage.getItem('todos');
    let received = JSON.stringify([newItem]);
    expect(expected).toBe(received);
  });


});
