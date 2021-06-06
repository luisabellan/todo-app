import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../Todo/Todo';


const todo = {
  id: 'a',
  name: 'buy bread',
  completed: false
};

afterEach(cleanup);

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Todo todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show todo', () => {
    render(<Todo todo={todo} />);

    //expect(screen.getByTestId('a')).toBeInTheDocument();
    expect(screen.getByTestId('todo-output')).toBeInTheDocument();
  });

  it('click checkbox', () => {
    render(<Todo todo={todo} />);

    expect(screen.getByTestId('a')).toBeInTheDocument();
    expect(screen.getByTestId('todo-output')).toBeInTheDocument();
    expect(screen.getByTestId('a')).not.toBeChecked();

    userEvent.click(screen.getByTestId('a'));

    expect(screen.getByTestId('a')).toBeChecked();
  });



});
