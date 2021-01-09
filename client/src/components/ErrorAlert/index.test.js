import { render, screen } from "@testing-library/react";
import ErrorAlert from "./index";

test("renders error message correctly", () => {
  render(<ErrorAlert show={true} message="important message" />);
  const message = screen.getByText(/important message/i);
  expect(message).toBeInTheDocument();
});

test("Does not show mesage if no error occurred", () => {
  render(<ErrorAlert show={false} message="important message" />);
  expect(document.querySelector("div")).not.toHaveTextContent(
    "important message"
  );
});
