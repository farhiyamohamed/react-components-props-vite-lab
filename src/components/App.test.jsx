// src/components/App.test.jsx
import { render } from "@testing-library/react";
import App from "./App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  
  // Top-level div
  expect(container.querySelector(".App")).toBeInTheDocument();
  
  // Header
  expect(container.querySelector(".App header")).toBeInTheDocument();
  
  // About (aside)
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  
  // ArticleList (main)
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
