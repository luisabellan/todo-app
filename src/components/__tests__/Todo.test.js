import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Todo from '../Todo/Todo';


const todo = {
  id: 'a',
  note: 'buy bread',
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

    expect(screen.getByTestId(`checkbox ${todo.note}`)).toBeInTheDocument()
    expect(screen.getByTestId('todo-output')).toBeInTheDocument()
  });

  // TODO
  it('click checkbox', () => {
    let checkbox = screen.getByRole('checkbox')
    let output = screen.getByTestId('todo-output')

    expect(checkbox).toBeInTheDocument();
    expect(output).toBeInTheDocument();

    expect(checkbox).not.toBeChecked();
    expect(output).toBe("")
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(output).toBe(todo.note)


  });




})
