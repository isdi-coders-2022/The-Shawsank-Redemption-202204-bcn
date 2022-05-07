import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FormCountry from "./FormCountry";
import CountriesProvider from "../../store/contexts/CountriesProvider";

describe("Given a FormCountry Component", () => {
  describe("When it's called and the first button clicked", () => {
    test("Then it should render a label with the text Region:", () => {
      const expectedResult = "Region:";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );
      userEvent.click(screen.getByRole("button"));
      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
