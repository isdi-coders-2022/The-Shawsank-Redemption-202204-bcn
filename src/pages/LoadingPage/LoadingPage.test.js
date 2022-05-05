import { render, screen } from "@testing-library/react";
import LoadingPage from "./LoadingPage";

describe("Given a LoadingPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a 'Loading...' text", () => {
      const expectedText = "Loading...";

      render(<LoadingPage />);
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
