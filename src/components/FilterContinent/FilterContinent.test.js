import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FilterContinent from "./FilterContinent";

describe("Given a FilterContinent Component", () => {
  describe("When it's called and the first button clicked", () => {
    test("Then it should render seven button elements", () => {
      const expectedResult = 7;

      render(
        <BrowserRouter>
          <FilterContinent />
        </BrowserRouter>
      );
      userEvent.click(screen.getAllByRole("button")[0]);
      const receivedResult = screen.getAllByRole("button").length;

      expect(receivedResult).toBe(expectedResult);
    });
  });
});
