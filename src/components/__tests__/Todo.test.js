import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Todo from '../Todo/Todo';


const todo = {
  id: 'a',
  name: 'buy bread',
  completed: false
};

beforeEach(() => {
  render(<Todo todo={todo} />);

})

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Todo todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show todo', () => {

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByTestId('todo-output')).toBeInTheDocument();
  });

  it('click checkbox', () => {
    let checkbox = screen.getByRole('checkbox')
    let output = screen.getByTestId('todo-output')
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(output).toBeInTheDocument();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();

  });

  it.only('toggleItem()', (itemId) => {
    let todos = [
      {
        id: "a",
        note: "this is note a",
        completed: true
      },
      {
        id: "b",
        note: "this is note b",
        completed: true
      },
      {
        id: "c",
        note: "this is note c",
        completed: false
      }
    ];

    let myItem
    todos.map(item => {
      // console.log(item);
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      myItem = item
      return item;
    })
    let expected = {
      id: "c",
      note: "this is note c",
      completed: false
    }

    myItem = JSON.stringify(myItem).replace(/\\"/g, '')
    console.log(myItem)
    //myItem = myItem.replace(/\\"/g)
    expect(myItem).toBe(expected)


  })

})