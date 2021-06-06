import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  getByRole
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

let item = "";

beforeEach(() => {
  // setup a DOM element as a render target
  render(<TodoForm />);
});



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



it(`- handle changes of input text
    - submits todo items`, () => {

  const input = screen.getByRole('textbox');
  const form = screen.getByTestId('form');
  input.value = item;
  // listens for changes
  fireEvent.change(input);
  // checks item
  expect(input.value).toBe(item);

  // change text
  userEvent.type(input, 'read book')
  // submit form
  fireEvent.submit(form)
  // check text
  expect(input).toBeEmptyDOMElement()


})

it("should update state on submit", () => {
  const form = screen.getByTestId('form');
  const setState = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(state => [state, setState]);

  fireEvent.submit(form)


  expect(setState).toEqual({
    todoItem1: ''
  });
});




