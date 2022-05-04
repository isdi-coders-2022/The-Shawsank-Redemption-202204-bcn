import orderCountriesAlphabetically from "./orderCountriesAlphabetically";

describe("Given a orderCountriesAlphabetically function", () => {
  describe("When it's invoked with an array with 'Facu, Josep, Albert'", () => {
    test("Then it should return an array with 'Albert, Facu, Josep'", () => {
      const expectedResult = [
        { name: { common: "Albert" } },
        { name: { common: "Facu" } },
        { name: { common: "Josep" } },
      ];

      const dummyArray = [
        { name: { common: "Facu" } },
        { name: { common: "Josep" } },
        { name: { common: "Albert" } },
      ];

      const receivedResult = orderCountriesAlphabetically(dummyArray);

      expect(receivedResult).toStrictEqual(expectedResult);
    });
  });
});
