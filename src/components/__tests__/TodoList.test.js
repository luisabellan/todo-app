import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';
import App from '../../App';

const todos = [
  {
    name: 'buy bread',
    id: 1,
    completed: false
  },
  {
    name: 'buy milk',
    id: 2,
    completed: false
  },
  {
    name: 'write blog',
    id: 3,
    completed: false
  }
];


describe('todo list test', () => {
  afterEach(cleanup);
  it('matches snapshot', () => {
    const { asFragment } = render(<TodoList todos={todos} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should show name of todos', () => {
    render(<TodoList todos={todos} />);
    todos.forEach((d) => expect(screen.getByText(d.name)).toBeInTheDocument());
  });

});