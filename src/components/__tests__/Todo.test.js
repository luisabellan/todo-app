import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Todo from '../Todo';

const todo = {
  id: 1,
  name: 'buy bread',
  completed: false
};

afterEach(cleanup);

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Todo todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show name of todos', () => {
    render(<Todo todo={todo} />);

    expect(screen.getByText(todo.name)).toBeInTheDocument();
  });
  test('click on checkbox', () => {
    render(
      <div>
        <label htmlFor="checkbox">Check</label>
        <input id="checkbox" type="checkbox" />
      </div>,
    )

    userEvent.click(screen.getByText('Check'))
    expect(screen.getByLabelText('Check')).toBeChecked()
  });


});