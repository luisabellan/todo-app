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



  it('renders:title, Text input field, Add button, Clean button and footer', () => {
    render(<App />)
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






  /*   // Clear item
    test('clear item', () => {
      //const onChange = jest.fn()
      render(<App />)
      const checkbox = screen.getByTestId(`checkbox ${ props.todo.name }`)
      const cleanButton = screen.getByText('Delete')
      userEvent.click(checkbox)
     
      expect(checkbox).toBeChecked()
    }) */



  //setTodos

  test('saveData()', () => {
    render(<App />)
    const setTodos = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(todos => [todos, setTodos]);


    let Newtodos = [{ id: "sdfsdf", name: 'buy bananas', completed: false }];
    setTodos(Newtodos);
    let currentItems = localStorage.getItem('todos');

    let todoItems = [];

    console.log(localStorage.getItem('todos'))

    expect(localStorage.getItem('todos')).toBe([{ id: "sdfsdf", name: 'buy bananas', completed: false }]);

  });



  // localStorage.setItem fun
  test('localStorage.setItem fun', () => {

    let newItem = { id: "a", name: 'buy bananas', completed: false };
    localStorage.setItem('todos', []);
    let currentTodos = localStorage.getItem('todos')
    localStorage.setItem('todos', JSON.stringify([newItem]));
    let received = localStorage.getItem('todos')
    let expected = JSON.stringify([newItem]);;
    expect(expected).toBe(received);
  });

  /* it('add todo', () => {
    let item = {
      todoItem1: ""
    };
  
    const { getByTestId } = render(<TodoForm />);
    let input = getByTestId('todo-input');
    input = item.todoItem1;
    userEvent.type(screen.getByTestId('todo-input'), 'read book')
    expect(screen.getByTestId('todo-input')).toHaveValue('read book')
  
    userEvent.click(screen.getByText("Add"));
    //console.log(item.todoItem1)
    expect(input.value).toBe(item.todoItem1.value);
  
  }); */


  it("should toggle items by updating the todo item state (todo.completed = false --> true) when we click on checkbox", () => {
    const toggleItem = jest.fn();

    render(
      <App onClick={toggleItem}>
        <TodoList>
          <Todo onClick={toggleItem} />
        </TodoList>

      </App>
    )
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation = (todos, setTodos, todoId, toggleItem) => {

      setTodos(
        todos.map((todo) => {
          // console.log(item);
          if (todoId === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }

          return todo;
        })
      );



    };

    //wrapper.find("#para1").simulate("click");
    userEvent.click(screen.getByTestId("checkbox buy bananas"))
    //expect(changeSize).toBeTruthy();
    expect(screen.getByText("buy bananas")).toBeInTheDocument()
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
