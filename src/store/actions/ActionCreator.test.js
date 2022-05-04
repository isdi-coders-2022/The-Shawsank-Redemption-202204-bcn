import { increaseNumber, decreaseNumber } from "./ActionCreator";
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
