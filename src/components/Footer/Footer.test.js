import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Given a Footer Component", () => {
  describe("When it's called", () => {
    test("Then it should render two button elements", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );
      const receivedResult = screen.getAllByRole("button");

      expect(receivedResult.length).toBe(2);
    });
  });
});
