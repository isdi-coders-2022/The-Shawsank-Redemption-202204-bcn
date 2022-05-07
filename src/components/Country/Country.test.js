import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountriesProvider from "../../store/contexts/CountriesProvider";
import Country from "./Country";

describe("Given a Country Component", () => {
  const dummyCountry = {
    flags: {
      svg: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b1/Bandera_de_Wakanda.png/revision/latest?cb=20190823173054&path-prefix=es",
    },
    name: { common: "Maripuri", official: "Maripuri" },
    region: "Africa",
    capital: "Wakanda",
    population: "500",
  };
  describe("When it's called with a dummyCountry prop", () => {
    test("Then it should render the text 'Maripuri' 2 times", () => {
      const expectedResult = 2;
      const testText = "Maripuri";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <Country country={dummyCountry} />
          </BrowserRouter>
        </CountriesProvider>
      );

      const receivedResult = screen.getAllByText(testText).length;
      expect(receivedResult).toBe(expectedResult);
    });
  });

  describe("When it's called with a dummyCountry prop and wasn't printed in home page", () => {
    test("Then it should render one button element", () => {
      const expectedResult = 1;

      render(
        <CountriesProvider>
          <BrowserRouter>
            <Country country={dummyCountry} printedInHomePage={false} />
          </BrowserRouter>
        </CountriesProvider>
      );

      const receivedResult = screen.getAllByRole("button");
      expect(receivedResult).toHaveLength(expectedResult);
    });
  });

  describe("When it's called with a dummyCountry prop and was printed in home page", () => {
    test("Then it should render two button elements", () => {
      const expectedResult = 2;

      render(
        <CountriesProvider>
          <BrowserRouter>
            <Country country={dummyCountry} printedInHomePage={true} />
          </BrowserRouter>
        </CountriesProvider>
      );

      const receivedResult = screen.getAllByRole("button");
      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
