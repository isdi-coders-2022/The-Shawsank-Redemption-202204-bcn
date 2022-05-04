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
});
