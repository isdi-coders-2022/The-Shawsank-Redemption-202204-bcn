import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from "./IconButton";

describe("Given a IconButton Component", () => {
  describe("When it's called", () => {
    test("Then it should render a button with an img element inside", () => {
      render(<IconButton />);
      const receivedElement = screen.getByRole("img");

      expect(receivedElement).toBeInTheDocument();
    });
  });
  describe("When it's clicked", () => {
    test("Then it should call a mock action", () => {
      const mock = jest.fn();

      render(<IconButton action={mock} />);
      userEvent.click(screen.getByRole("button"));

      expect(mock).toHaveBeenCalled();
    });
  });
});
