import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import InfoCountry from "./InfoCountry";

describe("Given a InfoCountry Component", () => {
  describe("When it's called with a dummyCountry prop", () => {
    const dummyCountry = {
      flags: {
        svg: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b1/Bandera_de_Wakanda.png/revision/latest?cb=20190823173054&path-prefix=es",
      },
      name: { common: "Maripuri", official: "Maripuri" },
      region: "Africa",
      capital: "Wakanda",
      population: "2000",
      area: "2000",
      independent: true,
      timezones: ["3UTC", "Hola"],
    };
    test("Then it should render the text 'Population: 2000' one time", () => {
      const testText = "Population: 2000";

      render(
        <BrowserRouter>
          <InfoCountry country={dummyCountry} />
        </BrowserRouter>
      );

      const receivedResult = screen.getByText(testText);
      expect(receivedResult).toBeInTheDocument();
    });

    test("Then it should render the text 'Region: Africa'", () => {
      const testText = "Region: Africa";

      render(
        <BrowserRouter>
          <InfoCountry country={dummyCountry} />
        </BrowserRouter>
      );

      const receivedResult = screen.getByText(testText);
      expect(receivedResult).toBeInTheDocument();
    });
  });
});
