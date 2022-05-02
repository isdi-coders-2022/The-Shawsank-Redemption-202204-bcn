import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's instantiated with a text 'perro'", () => {
    test("Then it should render a button with the text 'perro' inside", () => {
      const expectedResult = "perro";

      render(<Button text={expectedResult} />);
      const receivedElement = screen.getByRole("button");

      expect(receivedElement.innerHTML).toBe(expectedResult);
    });
  });

  describe("When it's clicked", () => {
    test("Then it should call a mock function", () => {
      const mock = jest.fn();

      render(<Button action={mock} />);
      userEvent.click(screen.getByRole("button"));

      expect(mock).toHaveBeenCalled();
    });
  });
});
