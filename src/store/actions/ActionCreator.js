import {
  increaseNumberType,
  decreaseNumberType,
  loadCountriesType,
  addCountryType,
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
