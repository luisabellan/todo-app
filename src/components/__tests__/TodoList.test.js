import React from "react";
import "@testing-library/jest-dom";

import { render, screen, cleanup } from "@testing-library/react";
import TodoList from "../TodoList";

const todoItems = [
  {
    name: "buy bread",
    id: "1",
    completed: false,
  },
];

afterEach(cleanup);

describe("todo list test", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<TodoList todoItems={todoItems} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should show name of todos", () => {
    render(<TodoList todoItems={todoItems} />);
    todoItems.forEach((d) =>
      expect(screen.getByText(d.name)).toBeInTheDocument()
    );
  });
});
