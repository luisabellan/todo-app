import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup
  /* getRoles*/
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TodoForm from '../TodoForm';
import Todo from '../Todo';
import App from '../../App';


it('matches snapshot', () => {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders TodoForm', async () => {
  render(<TodoForm />);
  const todoForm = await screen.findByPlaceholderText(/New task/i);
  const addTodoButton = screen.getByText(/add/i);
  const clearListButton = screen.getByText(/clean/i);

  expect(todoForm).toBeInTheDocument();
  expect(addTodoButton).toBeInTheDocument();
  expect(clearListButton).toBeInTheDocument();
});
cleanup();

it('handle changes of input text', () => {
  let item = "";
  const { getByTestId } = render(<TodoForm />);
  const todoInputElement = getByTestId('todo-input');
  todoInputElement.value = item;
  fireEvent.change(todoInputElement);
  expect(todoInputElement.value).toBe(item);

  userEvent.type(screen.getByTestId('todo-input'), 'read book')
  expect(screen.getByTestId('todo-input')).toHaveValue('read book')
});
