import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Filter by continents'", () => {
      const expectedText = "Filter by continents";

      render(<HomePage />);
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
