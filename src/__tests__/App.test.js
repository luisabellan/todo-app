import React from "react";
import {
  render, screen, cleanup,
} from '@testing-library/react';
import App from "../App";


import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";


configure({ adapter: new Adapter() });


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


});