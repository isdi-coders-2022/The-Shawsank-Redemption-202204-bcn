import {
  increaseNumber,
  decreaseNumber,
  loadMyCountries,
  loadCountries,
} from "../actions/ActionCreator";
import countriesReducer from "./countriesReducer";

describe("Given a countriesReducer function", () => {
  describe("When it's invoked with a initial state of 5 and a increaseNumber action", () => {
    test("Then it should return a object with a state of 6", () => {
      const expectedResult = {
        page: 6,
      };

      const dummyObject = {
        page: 5,
      };

      const receivedResult = countriesReducer(dummyObject, increaseNumber());

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });

  describe("When it's invoked with a initial state of 5 and a decreaseNumber action", () => {
    test("Then it should return a object with a state of 4", () => {
      const expectedResult = {
        page: 4,
      };

      const dummyObject = {
        page: 5,
      };

      const receivedResult = countriesReducer(dummyObject, decreaseNumber());

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });

  describe("When it's invoked with a initial state of 5 and an invalid action", () => {
    test("Then it should return a object with a state of 5", () => {
      const expectedResult = {
        page: 5,
      };

      const dummyObject = {
        page: 5,
      };

      const receivedResult = countriesReducer(dummyObject, increaseNumber);

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });

  describe("When it's invoked with a initial state of 0 and a decreaseNumber function", () => {
    test("Then it should return a object with a state of 0", () => {
      const expectedResult = {
        page: 0,
      };

      const dummyObject = {
        page: 0,
      };

      const receivedResult = countriesReducer(dummyObject, decreaseNumber());

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });

  describe("When it's invoked with a initial state of 25 and a increaseNumber function", () => {
    test("Then it should return a object with a state of 25", () => {
      const expectedResult = {
        page: 25,
      };

      const dummyObject = {
        page: 25,
      };

      const receivedResult = countriesReducer(dummyObject, increaseNumber());

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });

  describe("When it's invoked with a initial state of 'loaded: false' and a loadMyCountries function", () => {
    test("Then it should return a object a state of 'loaded: true'", () => {
      const expectedResult = {
        loaded: true,
      };

      const dummyObject = {
        loaded: false,
      };

      const receivedResult = countriesReducer(dummyObject, loadMyCountries());

      expect(receivedResult).toEqual(expectedResult);
    });
  });

  describe("When it's invoked with a initial state of 'loaded: false' and a loadCountries function", () => {
    test("Then it should return a object a state of 'loaded: true'", () => {
      const expectedResult = {
        loaded: true,
      };

      const dummyObject = {
        loaded: false,
      };

      const receivedResult = countriesReducer(dummyObject, loadCountries());

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
