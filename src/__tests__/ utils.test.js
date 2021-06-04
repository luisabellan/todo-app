import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { handleClick } from '../utils'

// // saveData
// test('saveData func', () => {
//   let newTodos = [{ id: 1, name: 'buy bananas', completed: false }];
//   saveData(newTodos);
//   let currentItems = localStorage.getItem('todos');
//   console.log(currentItems);
//   expect(currentItems.toString()).toBe(JSON.stringify(newTodos));
// });

// localStorage.setItem fun
test('localStorage.setItem fun', () => {
  let newItem = { id: 1, name: 'buy bananas', completed: false };
  localStorage.setItem('todos', []);
  let currentTodos = localStorage.getItem('todos')
  localStorage.setItem('todos', JSON.stringify([newItem]));
  let expected = localStorage.getItem('todos');
  let received = JSON.stringify([newItem]);
  expect(expected).toBe(received);
});