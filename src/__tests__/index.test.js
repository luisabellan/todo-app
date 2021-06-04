import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App'


describe('App', () => {



  /* it('renders', () => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );

    expect(screen.getByTestId("app")).toBeInTheDocument()

  });
 */

  test('test', () => {

    expect(1 + 1).toBe(2)
  })








});
