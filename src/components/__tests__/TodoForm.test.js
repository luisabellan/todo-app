import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  /* getRoles*/
} from '@testing-library/react';

import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import TodoForm from '../TodoForm';
import Todo from '../Todo';
import App from '../../App';

configure({ adapter: new Adapter() });



cleanup();
it('matches snapshot', () => {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
cleanup();

it('renders TodoForm', () => {
  render(<TodoForm />);
  const todoForm = screen.getByPlaceholderText(/New task/i);
  const addTodoButton = screen.getByText(/add/i);
  const clearListButton = screen.getByText(/clean/i);

  expect(todoForm).toBeInTheDocument();
  expect(addTodoButton).toBeInTheDocument();
  expect(clearListButton).toBeInTheDocument();
});
cleanup();

it('handle changes of input text', (item = 'buy bread') => {
  const { getByTestId } = render(<TodoForm />);
  //let item = 'buy bread';
  const todoInputElement = getByTestId('todo-input');
  todoInputElement.value = item;
  fireEvent.change(todoInputElement);
  expect(todoInputElement.value).toBe(item);
});


it("should update state on click (add and delete todos", () => {
  shallow(<App />);
  shallow(<TodoForm />);
  shallow(<Todo />);
  const setState = jest.fn();
  const addItem = jest.fn();
  const clearCompleted = jest.fn();
  const item = "buy bread"
  const wrapper = mount(<TodoForm
    className="todoform"
    addItem={item}
    clearCompleted={clearCompleted} />);
  const addItemClick = jest.spyOn(React, "useState");
  addItemClick.mockImplementation(state => [state, setState]);

  wrapper.find(".add-to-do-btn").simulate("click");
  expect(addItem).toBeTruthy();
});

