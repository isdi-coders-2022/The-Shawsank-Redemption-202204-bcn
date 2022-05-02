import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When it's called", () => {
    test("Then it should render three li elements", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const result = screen.getAllByRole("listitem");

      expect(result.length).toBe(3);
    });
    test("Then it should render a heading element with 'AC' text inside", () => {
      const expectedText = "AC";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const result = screen.getByRole("heading").textContent;

      expect(result).toBe(expectedText);
    });
  });
});
