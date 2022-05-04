import actionTypes from "./ActionTypes";

export const increaseNumber = () => ({
  type: actionTypes.increaseNumber,
});

export const decreaseNumber = () => ({
  type: actionTypes.decreaseNumber,
});

export const loadCountries = (countries) => ({
  type: actionTypes.loadCountries,
  payload: countries,
});

export const addCountry = (country) => ({
  type: actionTypes.addCountry,
  payload: country,
});
