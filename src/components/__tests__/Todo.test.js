import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../Todo/Todo';

const todo = {
  id: 'checkbox buy bread',
  name: 'buy bread',
  completed: false
};

afterEach(cleanup);

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Todo todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show todos', () => {
    render(<Todo todo={todo} />);

    expect(screen.getByTestId('checkbox buy bread')).toBeInTheDocument();
    expect(screen.getByTestId('todo-output')).toBeInTheDocument();
  });

  it('click checkbox', () => {
    render(<Todo todo={todo} />);

    expect(screen.getByTestId('checkbox buy bread')).toBeInTheDocument();
    expect(screen.getByTestId('todo-output')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox buy bread')).not.toBeChecked();

    userEvent.click(screen.getByTestId('checkbox buy bread'));

    expect(screen.getByTestId('checkbox buy bread')).toBeChecked();
  });



});
