import { render, screen } from "@testing-library/react";
import CountriesProvider from "../../store/contexts/CountriesProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Filter by continents'", () => {
      const expectedText = "Filter by continents";

      render(
        <CountriesProvider>
          <HomePage />
        </CountriesProvider>
      );
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
