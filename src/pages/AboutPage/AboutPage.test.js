import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutPage from "./AboutPage";

describe("Given a About page", () => {
  describe("When it's called", () => {
    test("Then it should render an article with 'Lorem ipsum' text inside", () => {
      render(
        <BrowserRouter>
          <AboutPage />
        </BrowserRouter>
      );

      const result = screen.getByRole("article");

      expect(result).toBeInTheDocument();
    });
    test("Then it should render a heading element with 'Amazing Countries' text inside", () => {
      const expectedText = "Amazing Countries";

      render(
        <BrowserRouter>
          <AboutPage />
        </BrowserRouter>
      );

      const result = screen.getByRole("heading").textContent;

      expect(result).toBe(expectedText);
    });
  });
});
