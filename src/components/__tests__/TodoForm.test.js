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
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import App from '../../App';


it('matches snapshot', () => {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders TodoForm', async () => {
  render(<TodoForm />);
  const todoForm = await screen.findByPlaceholderText(/New task/i);
  const addTodoButton = screen.getByText(/Add/);
  const clearListButton = screen.getByText(/Delete/);
  const cleanListButton = screen.getByText(/Clear/);

  expect(todoForm).toBeInTheDocument();
  expect(addTodoButton).toBeInTheDocument();
  expect(clearListButton).toBeInTheDocument();
  expect(cleanListButton).toBeInTheDocument();
});

it('handle changes of input text', () => {
  let item = "";
  const { getByTestId } = render(<TodoForm />);
  const input = getByTestId('todo-input');
  input.value = item;
  fireEvent.change(input);
  expect(input.value).toBe(item);

  userEvent.type(screen.getByTestId('todo-input'), 'read book')
  expect(screen.getByTestId('todo-input')).toHaveValue('read book')
});


