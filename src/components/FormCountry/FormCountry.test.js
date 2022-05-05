import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FormCountry from "./FormCountry";

describe("Given a FormCountry Component", () => {
  describe("When it's called and the first button clicked", () => {
    test("Then it should render a label with the text Region:", () => {
      const expectedResult = "Region:";

      render(
        <BrowserRouter>
          <FormCountry />
        </BrowserRouter>
      );
      userEvent.click(screen.getByRole("button"));
      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
