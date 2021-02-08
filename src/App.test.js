import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hola/i);
  expect(linkElement).toBeInTheDocument();
});

test("finds the edit text", () => {
  render(<App />);
  expect(screen.getByText(/hola/i)).toBeInTheDocument();
});
