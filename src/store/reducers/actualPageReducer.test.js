import { increaseNumber, decreaseNumber } from "../actions/ActionCreator";
import actualPageReducer from "./actualPageReducer";

describe("Given a actualPageReducer function", () => {
  describe("When it's invoked with a initial state of 5 and a increaseNumber action", () => {
    test("Then it should return a object with a state of 6", () => {
      const expectedResult = {
        page: 6,
      };

      const dummyObject = {
        page: 5,
      };

      const receivedResult = actualPageReducer(dummyObject, increaseNumber());

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

      const receivedResult = actualPageReducer(dummyObject, decreaseNumber());

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

      const receivedResult = actualPageReducer(dummyObject, increaseNumber);

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

      const receivedResult = actualPageReducer(dummyObject, decreaseNumber());

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });

  describe("When it's invoked with a initial state of 25 and a increaseNumber function", () => {
    test("Then it should return a object with a state of 0", () => {
      const expectedResult = {
        page: 25,
      };

      const dummyObject = {
        page: 25,
      };

      const receivedResult = actualPageReducer(dummyObject, increaseNumber());

      expect(receivedResult.page).toBe(expectedResult.page);
    });
  });
});
