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

  describe("When it's invoked with an array with 'Nois, Nois, Nois'", () => {
    test("Then it should return an array with 'Nois, Nois, Nois'", () => {
      const expectedResult = [
        { name: { common: "Nois" } },
        { name: { common: "Nois" } },
        { name: { common: "Nois" } },
      ];

      const dummyArray = [
        { name: { common: "Nois" } },
        { name: { common: "Nois" } },
        { name: { common: "Nois" } },
      ];

      const receivedResult = orderCountriesAlphabetically(dummyArray);

      expect(receivedResult).toStrictEqual(expectedResult);
    });
  });
});
