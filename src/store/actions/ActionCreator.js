import {
  increaseNumberType,
  decreaseNumberType,
  loadCountriesType,
  addCountryType,
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

export const increaseNumber = () => ({
  type: increaseNumberType,
});

export const decreaseNumber = () => ({
  type: decreaseNumberType,
});

export const loadCountries = (countries) => ({
  type: loadCountriesType,
  payload: countries,
});

export const addCountry = (country) => ({
  type: addCountryType,
  payload: country,
});

export const loadMyCountries = (country) => ({
  type: loadMyCountriesType,
  payload: country,
});

export const addNewCountryName = (input) => ({
  type: addNewCountryNameType,
  payload: input,
});

export const addNewCountryOfficialName = (input) => ({
  type: addNewCountryOfficialNameType,
  payload: input,
});

export const addNewCountryRegion = (input) => ({
  type: addNewCountryRegionType,
  payload: input,
});

export const addNewCountryCapital = (input) => ({
  type: addNewCountryCapitalType,
  payload: input,
});

export const addNewCountryPopulation = (input) => ({
  type: addNewCountryPopulationType,
  payload: input,
});

export const addNewCountryArea = (input) => ({
  type: addNewCountryAreaType,
  payload: input,
});

export const addNewCountryIndependent = (input) => ({
  type: addNewCountryIndependentType,
  payload: input,
});

export const addNewCountryTimeZone = (input) => ({
  type: addNewCountryTimeZoneType,
  payload: input,
});
