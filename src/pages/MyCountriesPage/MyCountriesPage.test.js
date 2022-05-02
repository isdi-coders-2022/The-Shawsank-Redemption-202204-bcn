import { render, screen } from "@testing-library/react";
import MyCountriesPage from "./MyCountriesPage";

describe("Given a MyCountriesPage component", () => {
  describe("When it's called", () => {
    test("Then it should render at least one heading element", () => {
      render(<MyCountriesPage />);
      const receivedElement = screen.getAllByRole("heading")[0];
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
