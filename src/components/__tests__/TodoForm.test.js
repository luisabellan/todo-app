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

it('add todo', () => {
  let item = {
    todoItem1: ""
  };

  const { getByTestId } = render(<TodoForm />);
  const input = getByTestId('todo-input');
  input.value = item.todoItem1;
  userEvent.type(screen.getByTestId('todo-input'), 'read book')
  expect(screen.getByTestId('todo-input')).toHaveValue('read book')

  userEvent.click(screen.getByText("Add"));
  expect(input.value).toBe(item.todoItem1);

});
