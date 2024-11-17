import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EyesOnMe from "../EyesOnMe";

test('displays a button with the text "Eyes on me"', () => {
  render(<EyesOnMe />); // Render the component
  const button = screen.getByText("Eyes on me"); // Use getByText to find the button
  expect(button).toBeInTheDocument(); // Ensure the button is in the document
});

test("focusing the button triggers console output", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  render(<EyesOnMe />);
  const button = screen.getByText("Eyes on me");

  fireEvent.focus(button); // Trigger focus event

  expect(consoleSpy).toHaveBeenCalledWith("Good!");
  consoleSpy.mockRestore(); // Restore original console behavior
});

test("removing focus (blur) on the button triggers console output", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  render(<EyesOnMe />);
  const button = screen.getByText("Eyes on me");

  fireEvent.blur(button); // Trigger blur event

  expect(consoleSpy).toHaveBeenCalledWith("Hey! Eyes on me!");
  consoleSpy.mockRestore(); // Restore original console behavior
});
