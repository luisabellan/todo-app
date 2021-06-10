import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import TodoList from '../components/TodoList/TodoList';
import Todo from '../components/Todo/Todo';



describe('App', () => {



  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });


  beforeEach(() => {
    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    localStorage.setItem('todos', JSON.stringify(todos));
    render(
      <App>
        <TodoList todos={todos} />
      </App>)


  })

  it('renders:title, Text input field, Add button, Clean button and footer', () => {
    const title = screen.getByText(/Todo App/);
    const placeholder = screen.getByPlaceholderText(/New Task/);
    const addTodoButton = screen.getByText(/Add/);
    const cleanTodoButton = screen.getByText(/Completed/);
    const clearTodoButton = screen.getByText(/Clear/);
    const footer = screen.getByText(/Made with 💓 and ☕ by/);
    const footerLink = screen.getByText(/Luis Abellan/);

    expect(title).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
    expect(cleanTodoButton).toBeInTheDocument();
    expect(clearTodoButton).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(footerLink).toBeInTheDocument();
  });






  // Clear item
  test('clear item', () => {
    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    localStorage.setItem('todos', JSON.stringify(todos));
    let checkbox = screen.getByTestId("checkbox buy bananas")
    const cleanButton = screen.getByText('Completed')

    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }])
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    userEvent.click(cleanButton)
    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([{ id: "b", note: 'buy strawberries', completed: false }])
  })



  // works
  test('saveData()', () => {

    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    // does not work:
    //jest.spyOn(localStorage, "setItem");
    //localStorage.setItem = jest.fn();

    // works:
    // this works to --> window.localStorage.__proto__.setItem = jest.fn();
    jest.spyOn(window.localStorage.__proto__, 'setItem');

    localStorage.clear()
    localStorage.setItem('todos', JSON.stringify(todos));


    let currentItems = JSON.parse(localStorage.getItem('todos'));
    console.log(currentItems)



    expect(currentItems).toEqual(todos);
    localStorage.clear()



  });






  /*   // localStorage.setItem fun
    test('localStorage.setItem fun', () => {
      localStorage.clear()
      let newItem = { id: "a", name: 'buy bananas', completed: false };
      localStorage.setItem('todos', []);
      let currentTodos = localStorage.getItem('todos')
      localStorage.setItem('todos', JSON.stringify([newItem]));
      let received = localStorage.getItem('todos')
      let expected = JSON.stringify([newItem]);;
      expect(expected).toBe(received);
    });
   */



  it.skip("should toggle items by updating the todo item state (todo.completed = false --> true) when we click on checkbox", () => {
    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    let checkbox = screen.getByTestId("checkbox buy bananas")
    let output = screen.getByTestId("todo-output")



    expect(checkbox).toBeInTheDocument()
    userEvent.click(checkbox)
    output = { note: 'buy strawberries' }





    expect(todos).toBe(output)


  });

  /* 
    Source: https://jestjs.io/docs/manual-mocks
  
  #  Mocking methods which are not implemented in JSDOM
  
  
  If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible. This is e.g. the case with window.matchMedia(). Jest returns TypeError: window.matchMedia is not a function and doesn't properly execute the test.
  
  In this case, mocking matchMedia in the test file should solve the issue:
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  
  This works if window.matchMedia() is used in a function (or method) which is invoked in the test. If window.matchMedia() is executed directly in the tested file, Jest reports the same error. In this case, the solution is to move the manual mock into a separate file and include this one in the test before the tested file:
  import './matchMedia.mock'; // Must be imported before the tested file
  import {myMethod} from './file-to-test';
  
  describe('myMethod()', () => {
    // Test the method here...
  });
  
     */

});
