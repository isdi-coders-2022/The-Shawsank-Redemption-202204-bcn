import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "./store/contexts/CountriesContext";
import App from "./App";

describe("Given a App Component", () => {
  describe("When it's called and value of loaded is 'false'", () => {
    test("Then it should render the text 'Loading'...", () => {
      const expectedResult = "Loading...";
      const state = {
        loading: false,
      };

      render(
        <Context.Provider value={{ state }}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Context.Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
