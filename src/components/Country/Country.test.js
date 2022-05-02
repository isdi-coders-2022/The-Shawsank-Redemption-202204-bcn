import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Country from "./Country";

describe("Given a Country Component", () => {
  describe("When it's called with a dummyCountry prop", () => {
    const dummyCountry = {
      name: "headingText",
      nativeName: "headingText",
      region: "regionText",
    };
    test("Then it should render the text 'headingText' 2 times", () => {
      const expectedResult = 2;
      const testText = "headingText";

      render(
        <BrowserRouter>
          <Country country={dummyCountry} />
        </BrowserRouter>
      );

      const receivedResult = screen.getAllByText(testText).length;
      expect(receivedResult).toBe(expectedResult);
    });

    test("Then it should render the text 'Region: regionText'", () => {
      const testText = "Region: regionText";

      render(
        <BrowserRouter>
          <Country country={dummyCountry} />
        </BrowserRouter>
      );

      const receivedResult = screen.getByText(testText);
      expect(receivedResult).toBeInTheDocument();
    });
  });
});