import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Context from "../../store/contexts/Context";
import CountriesProvider from "../../store/contexts/CountriesProvider";
import Footer from "./Footer";

describe("Given a Footer Component", () => {
  describe("When it's called", () => {
    test("Then it should render two button elements", () => {
      render(
        <CountriesProvider>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </CountriesProvider>
      );
      const receivedResult = screen.getAllByRole("button");

      expect(receivedResult.length).toBe(2);
    });
  });

  describe("When it's called with a page state of 12", () => {
    test("Then it should render a '12/25' text", () => {
      const expectedText = "12/25";
      const state = {
        page: 12,
      };

      render(
        <Context.Provider value={{ state }}>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </Context.Provider>
      );
      const receivedResult = screen.getByText(expectedText);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's the '<' button is clicked", () => {
    test("Then it should render a '0/25' text", () => {
      const expectedText = "0/25";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.click(screen.getAllByRole("button")[0]);
      const receivedResult = screen.getByText(expectedText);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's the '>' button is clicked", () => {
    test("Then it should render a '1/25' text", () => {
      const expectedText = "1/25";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.click(screen.getAllByRole("button")[1]);
      const receivedResult = screen.getByText(expectedText);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
