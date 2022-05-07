import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Context from "../../store/contexts/Context";
import CountriesProvider from "../../store/contexts/CountriesProvider";
import MyCountriesPage from "./MyCountriesPage";

describe("Given a MyCountriesPage component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Create a Country'", () => {
      const expectedText = "Create a Country";

      render(
        <CountriesProvider>
          <MyCountriesPage />
        </CountriesProvider>
      );
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });

  describe("When it's called with a country in myCountries", () => {
    test("Then it should render the text 'Maripuri' two times", () => {
      const textToSearch = "Maripuri";
      const expectedResult = 2;
      const state = {
        myCountries: [
          {
            flags: {
              svg: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b1/Bandera_de_Wakanda.png/revision/latest?cb=20190823173054&path-prefix=es",
            },
            name: { common: "Maripuri", official: "Maripuri" },
            region: "Africa",
            capital: "Wakanda",
            population: "500",
            independent: true,
            timezones: ["12.30", "12.23"],
          },
        ],
      };

      render(
        <Context.Provider value={{ state }}>
          <BrowserRouter>
            <MyCountriesPage />
          </BrowserRouter>
        </Context.Provider>
      );
      const receivedResult = screen.getAllByText(textToSearch);

      expect(receivedResult).toHaveLength(expectedResult);
    });
  });

  describe("When the create a country button and then the submit button are clilcked", () => {
    test("Then it should render a text with the content Region:", () => {
      const textToSearch = "Region:";

      render(
        <CountriesProvider>
          <BrowserRouter>
            <MyCountriesPage />
          </BrowserRouter>
        </CountriesProvider>
      );

      userEvent.click(screen.getAllByRole("button")[0]);
      userEvent.click(screen.getAllByRole("button")[1]);

      const receivedResult = screen.getByText(textToSearch);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
