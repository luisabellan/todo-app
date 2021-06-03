import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  /* getRoles*/
} from '@testing-library/react';

import TodoForm from '../TodoForm';
import Todo from '../Todo';
import App from '../../App';




cleanup();
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

it('handle changes of input text', (item = 'buy bread') => {
  const { getByTestId } = render(<TodoForm />);
  const todoInputElement = getByTestId('todo-input');
  todoInputElement.value = item;
  fireEvent.change(todoInputElement);
  expect(todoInputElement.value).toBe(item);
});




