import React from 'react';
import {
  render,
  screen

} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TodoForm from '../TodoForm/TodoForm';
/* import Todo from '../Todo/Todo';
import App from '../../App'; */


// WORKS
it('matches snapshot', () => {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});


// WORKS
let items = []
let addItem = (item) => {
  items = [...items, item]

}
beforeEach(() => {
  // setup a DOM element as a render target
  render(<TodoForm addItem={addItem} />);
});


// WORKS
it('renders TodoForm', () => {

  const input = screen.getByPlaceholderText(/New task/i);
  const addTodoButton = screen.getByText(/Add/);
  const clearListButton = screen.getByText(/Completed/);
  const cleanListButton = screen.getByText(/Clear/);

  expect(input).toBeInTheDocument();
  expect(addTodoButton).toBeInTheDocument();
  expect(clearListButton).toBeInTheDocument();
  expect(cleanListButton).toBeInTheDocument();
});


// WORKS
it('e.handleChanges() TodoForm.js line 16', () => {

  const input = screen.getByRole('textbox');
  //console.log(input)

  // before changing text
  expect(input).toHaveValue('')
  // change text
  userEvent.type(input, 'read book')
  // after changing text I ...
  expect(input).toHaveValue('read book')




})





