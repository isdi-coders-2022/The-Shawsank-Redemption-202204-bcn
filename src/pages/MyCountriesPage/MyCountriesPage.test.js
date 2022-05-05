import { render, screen } from "@testing-library/react";
import CountriesProvider from "../../store/contexts/CountriesProvider";
import MyCountriesPage from "./MyCountriesPage";

describe("Given a MyCountriesPage component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Create a Country'", () => {
      const expectedText = "Create a Country";

      render(
        <CountriesProvider>
          <MyCountriesPage />
        </CountriesProvider>
      );
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
