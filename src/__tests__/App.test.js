import React from "react";
import {
  render, screen, cleanup, fireEvent
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../App";

describe("App", () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  cleanup()

  it('renders:title, Text input field, Add button, Clean button and footer', () => {
    render(<App />);
    const title = screen.getByText(/Todo App/);
    const placeholder = screen.getByPlaceholderText(/New Task/);
    const addTodoButton = screen.getByText(/Add/)
    const cleanTodoButton = screen.getByText(/Clean/)
    const footer = screen.getByText(/Made with 💓 and ☕ by/)
    const footerLink = screen.getByText(/Luis Abellan/);

    expect(title).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
    expect(cleanTodoButton).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(footerLink).toBeInTheDocument();


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