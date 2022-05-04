import { increaseNumber, decreaseNumber, loadCountries } from "./ActionCreator";
import actionTypes from "./ActionTypes";

describe("Given a increaseNumber function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      const expectedResult = {
        type: actionTypes.increaseNumber,
      };

      const receivedResult = increaseNumber();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a decreaseNumber function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      const expectedResult = {
        type: actionTypes.decreaseNumber,
      };

      const receivedResult = decreaseNumber();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a loadCountries function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let countries;
      const expectedResult = {
        type: actionTypes.loadCountries,
        payload: countries,
      };

      const receivedResult = loadCountries(countries);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
