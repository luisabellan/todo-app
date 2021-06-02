import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  getRoles
} from '@testing-library/react';
import TodoForm from '../TodoForm';

beforeEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
test('renders TodoForm', () => {
  render(<TodoForm />);
  const todoForm = screen.getByPlaceholderText(/New task/i);
  const addTodoButton = screen.getByText(/add/i);
  const clearListButton = screen.getByText(/clean/i);

  expect(todoForm).toBeInTheDocument();
  expect(addTodoButton).toBeInTheDocument();
  expect(clearListButton).toBeInTheDocument();
});

it('handle changes of input text', (item = 'buy bread') => {
  const { getByTestId } = render(<TodoForm />);
  //let item = 'buy bread';
  const todoInputElement = getByTestId('todo-input');
  todoInputElement.value = item;
  fireEvent.change(todoInputElement);
  expect(todoInputElement.value).toBe(item);
});


