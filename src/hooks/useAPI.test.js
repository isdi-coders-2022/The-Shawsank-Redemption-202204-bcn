import { renderHook, waitFor } from "@testing-library/react";
import testCountries from "../mocks/testUtils";
import CountriesProvider from "../store/contexts/CountriesProvider";
import useAPI from "./useAPI";

describe("Given the custom Hook useAPI", () => {
  describe("When loadCountries function it's invoqued", () => {
    test("Then it should return an array of two countries", async () => {
      const expectedCountries = testCountries;

      const wrapper = ({ children }) => (
        <CountriesProvider>{children}</CountriesProvider>
      );

      const { result } = renderHook(() => useAPI(), { wrapper });
      const countries = await waitFor(() => result.current.loadCountries());
      expect(countries).toEqual(expectedCountries);
    });
  });

  describe("When deleteCountry function it's invoqued", () => {
    test("Then it should return an array of one country", async () => {
      const wrapper = ({ children }) => (
        <CountriesProvider>{children}</CountriesProvider>
      );

      const { result } = renderHook(() => useAPI(), { wrapper });
      const countries = await waitFor(() => result.current.deleteCountry(1));

      expect(countries).not.toBeNull();
    });
  });
});
