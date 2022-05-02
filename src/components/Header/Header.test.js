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

      const receivedResult = screen.getAllByRole("listitem");

      expect(receivedResult.length).toBe(3);
    });
    test("Then it should render a heading element with 'AC' text inside", () => {
      const expectedText = "AC";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const receivedText = screen.getByRole("heading").textContent;

      expect(receivedText).toBe(expectedText);
    });
  });
});
