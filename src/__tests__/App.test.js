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
        <TodoList todos={todos}>
          <Todo />
        </TodoList>
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
  test('clear completed', () => {
    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    localStorage.setItem('todos', JSON.stringify(todos));
    let checkbox = screen.getByTestId("checkbox buy bananas")
    const cleanButton = screen.getByText('Completed')

    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }])
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    userEvent.click(cleanButton)
    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([{ id: "b", note: 'buy strawberries', completed: false }])
    localStorage.clear()
  })

  // Clear all
  test('clear all', () => {
    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    localStorage.setItem('todos', JSON.stringify(todos));
    const clearButton = screen.getByText('Clear')
    expect(clearButton).toBeInTheDocument()

    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }])

    userEvent.click(clearButton)
    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([])
    localStorage.clear()
  })

  // Add item
  test('add item', () => {

    let todos = [{ id: "a", note: 'buy bananas', completed: false }, { id: "b", note: 'buy strawberries', completed: false }]
    localStorage.setItem('todos', JSON.stringify(todos));


    //setItem('todos', JSON.stringify(todos));


    const addButton = screen.getByText('Add')
    expect(addButton).toBeInTheDocument()

    const textInput = screen.getByRole('textbox')
    expect(textInput).toBeInTheDocument()
    expect(textInput).toHaveValue("")

    const noText = screen.queryByText(/buy coconuts/i)
    expect(noText).toBeNull()

    // If I enter a alphanumeric text (/\S+/g)
    userEvent.type(textInput, "buy coconuts")
    expect(textInput).toHaveValue("buy coconuts")
    userEvent.click(addButton)
    expect(textInput).toHaveValue("")


    // const todos = JSON.parse(localStorage.getItem('todos'))
    //expect(noText).not.toBeInTheDocument()
    const text = screen.queryByText(/buy coconuts/i)
    expect(text).toBeInTheDocument()

    const regex = /\S+/g;
    expect(regex.test("buy coconuts")).toBeTruthy()

    expect(JSON.parse(localStorage.getItem('todos'))[0].note).toBe('buy bananas')
    expect(JSON.parse(localStorage.getItem('todos'))[1].note).toBe('buy strawberries')
    expect(JSON.parse(localStorage.getItem('todos'))[2].note).toBe('buy coconuts')




    // If I enter a non-alphanumeric text 
    // userEvent.type(textInput, "")
    userEvent.type(textInput, "  ")
    expect(textInput).toHaveValue("  ")
    userEvent.click(addButton)
    expect(textInput).toHaveValue("")


    // const text2 = screen.queryByText("")
    // expect(text2).toBeInTheDocument()

    expect(regex.test("")).toBeFalsy()

    expect(JSON.parse(localStorage.getItem('todos'))[0].note).toBe('buy bananas')
    expect(JSON.parse(localStorage.getItem('todos'))[1].note).toBe('buy strawberries')
    expect(JSON.parse(localStorage.getItem('todos'))[1].note).not.toBe('  ')



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
    //console.log(currentItems)



    expect(currentItems).toEqual(todos);
    localStorage.clear()



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
