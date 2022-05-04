import {
  addCountryType,
  decreaseNumberType,
  increaseNumberType,
  loadCountriesType,
} from "../actions/ActionTypes";

const countriesReducer = (state, action) => {
  let newData;

  switch (action.type) {
    case increaseNumberType:
      state.page === 25
        ? (newData = { ...state })
        : (newData = { ...state, page: state.page + 1 });
      break;
    case decreaseNumberType:
      state.page === 0
        ? (newData = { ...state })
        : (newData = { ...state, page: state.page - 1 });
      break;
    case loadCountriesType:
      newData = { ...state, countries: action.payload, loaded: true };
      break;

    case addCountryType:
      newData = {
        ...state,
        favouriteCountries: [...state.favouriteCountries, action.payload],
      };

      break;
    default:
      newData = { ...state };
  }
  return newData;
};

export default countriesReducer;
