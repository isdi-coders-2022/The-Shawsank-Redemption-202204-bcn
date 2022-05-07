import {
  increaseNumber,
  decreaseNumber,
  loadCountries,
  addCountry,
  loadMyCountries,
  addNewCountryName,
  addNewCountryOfficialName,
  addNewCountryRegion,
  addNewCountryCapital,
  addNewCountryPopulation,
  addNewCountryArea,
  addNewCountryIndependent,
  addNewCountryTimeZone,
} from "./ActionCreator";
import {
  addCountryType,
  decreaseNumberType,
  increaseNumberType,
  loadCountriesType,
  loadMyCountriesType,
  addNewCountryNameType,
  addNewCountryOfficialNameType,
  addNewCountryRegionType,
  addNewCountryCapitalType,
  addNewCountryPopulationType,
  addNewCountryAreaType,
  addNewCountryIndependentType,
  addNewCountryTimeZoneType,
} from "./ActionTypes";

describe("Given a increaseNumber function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      const expectedResult = {
        type: increaseNumberType,
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
        type: decreaseNumberType,
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
        type: loadCountriesType,
        payload: countries,
      };

      const receivedResult = loadCountries(countries);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addCountry function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let country;
      const expectedResult = {
        type: addCountryType,
        payload: country,
      };

      const receivedResult = addCountry(country);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a loadMyCountries function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let myCountries;
      const expectedResult = {
        type: loadMyCountriesType,
        payload: myCountries,
      };

      const receivedResult = loadMyCountries(myCountries);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryName function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryNameType,
        payload: input,
      };

      const receivedResult = addNewCountryName(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryOfficialName function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryOfficialNameType,
        payload: input,
      };

      const receivedResult = addNewCountryOfficialName(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryRegion function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryRegionType,
        payload: input,
      };

      const receivedResult = addNewCountryRegion(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryCapital function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryCapitalType,
        payload: input,
      };

      const receivedResult = addNewCountryCapital(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryPopulation function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryPopulationType,
        payload: input,
      };

      const receivedResult = addNewCountryPopulation(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryArea function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryAreaType,
        payload: input,
      };

      const receivedResult = addNewCountryArea(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryIndependent function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryIndependentType,
        payload: input,
      };

      const receivedResult = addNewCountryIndependent(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a addNewCountryTimeZone function", () => {
  describe("When it's invoked", () => {
    test("Then it should return a certain object", () => {
      let input;
      const expectedResult = {
        type: addNewCountryTimeZoneType,
        payload: input,
      };

      const receivedResult = addNewCountryTimeZone(input);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
