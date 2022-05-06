import InfoPage from "./InfoPage";
import { render, screen } from "@testing-library/react";
import Context from "../../store/contexts/Context";
import { Route, Routes, NavLink } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a InfoPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a text", () => {
      const expectedText = "Thanks for learning with us!";
      const state = {
        countries: [
          {
            flags: {
              svg: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b1/Bandera_de_Wakanda.png/revision/latest?cb=20190823173054&path-prefix=es",
            },
            name: { common: "Wakanda", official: "Wakanda" },
            region: "Africa",
            capital: "Wakanda",
            population: "500",
          },
        ],
      };

      render(
        <>
          <Routes>
            <Route path="/info/Wakanda" element={<InfoPage />}></Route>
          </Routes>

          <NavLink to="/info/Wakanda">
            <button />
          </NavLink>
        </>
      );

      userEvent.click(screen.getAllByRole("button")[0]);

      render(
        <Context.Provider value={{ state }}>
          <InfoPage />
        </Context.Provider>
      );

      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
