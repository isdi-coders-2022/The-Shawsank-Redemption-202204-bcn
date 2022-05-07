import { render, screen } from "@testing-library/react";
import Context from "../../store/contexts/Context";
import InfoPage from "./InfoPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "Maripuri",
  }),
}));

describe("Given a InfoPage Component", () => {
  describe("When it's called with the route /Wakanda", () => {
    test("Then it should render the text 'Maripuri' two times", () => {
      const textToFind = "Maripuri";
      const expectedResult = 2;
      const state = {
        countries: [
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
          <InfoPage />
        </Context.Provider>
      );
      const receivedResult = screen.getAllByText(textToFind);

      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
