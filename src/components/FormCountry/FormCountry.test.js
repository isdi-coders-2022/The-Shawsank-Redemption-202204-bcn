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

  describe("When the word 'hello' is written to the name input field", () => {
    test("Then the value of the flag input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Flag:"), inputText);
      expect(screen.getByLabelText("Flag:")).toHaveValue(inputText);
    });

    test("Then the value of the name input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Name:"), inputText);
      expect(screen.getByLabelText("Name:")).toHaveValue(inputText);
    });

    test("Then the value of the native name input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Native name:"), inputText);
      expect(screen.getByLabelText("Native name:")).toHaveValue(inputText);
    });

    test("Then the value of the region input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Region:"), inputText);
      expect(screen.getByLabelText("Region:")).toHaveValue(inputText);
    });

    test("Then the value of the capital input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Capital:"), inputText);
      expect(screen.getByLabelText("Capital:")).toHaveValue(inputText);
    });

    test("Then the value of the population input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Population:"), inputText);
      expect(screen.getByLabelText("Population:")).toHaveValue(inputText);
    });

    test("Then the value of the area input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Area:"), inputText);
      expect(screen.getByLabelText("Area:")).toHaveValue(inputText);
    });

    test("Then the value of the independent input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Independent:"), inputText);
      expect(screen.getByLabelText("Independent:")).toHaveValue(inputText);
    });

    test("Then the value of the time zone input field should be 'hello'", () => {
      const inputText = "hello";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <FormCountry />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.type(screen.getByLabelText("Time zone:"), inputText);
      expect(screen.getByLabelText("Time zone:")).toHaveValue(inputText);
    });
  });
});
