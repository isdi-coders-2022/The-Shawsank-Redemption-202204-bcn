import {
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
} from "../actions/ActionTypes";

const countriesReducer = (state, action) => {
  let newData;

  switch (action.type) {
    case increaseNumberType:
      if (state.page === 25) {
        newData = { ...state };
        break;
      }
      newData = { ...state, page: state.page + 1 };
      break;

    case decreaseNumberType:
      if (state.page === 0) {
        newData = { ...state };
        break;
      }
      newData = { ...state, page: state.page - 1 };
      break;

    case loadCountriesType:
      newData = { ...state, countries: action.payload, loaded: true };
      break;

    case loadMyCountriesType:
      newData = { ...state, myCountries: action.payload, loaded: true };
      break;

    case addNewCountryNameType:
      newData = {
        ...state,
        newCountry: {
          ...state.newCountry,
          name: {
            ...state.newCountry.name,
            common: action.payload,
          },
        },
      };
      break;

    case addNewCountryOfficialNameType:
      newData = {
        ...state,
        newCountry: {
          ...state.newCountry,
          name: {
            ...state.newCountry.name,
            official: action.payload,
          },
        },
      };
      break;

    case addNewCountryRegionType:
      newData = {
        ...state,
        newCountry: { ...state.newCountry, region: action.payload },
      };
      break;

    case addNewCountryCapitalType:
      newData = {
        ...state,
        newCountry: { ...state.newCountry, capital: [action.payload] },
      };
      break;

    case addNewCountryPopulationType:
      newData = {
        ...state,
        newCountry: { ...state.newCountry, population: action.payload },
      };
      break;

    case addNewCountryAreaType:
      newData = {
        ...state,
        newCountry: { ...state.newCountry, area: action.payload },
      };
      break;

    case addNewCountryIndependentType:
      newData = {
        ...state,
        newCountry: { ...state.newCountry, independent: action.payload },
      };
      break;

    case addNewCountryTimeZoneType:
      newData = {
        ...state,
        newCountry: { ...state.newCountry, timeZone: [action.payload] },
      };
      break;

    default:
      newData = { ...state };
  }
  return newData;
};

export default countriesReducer;
