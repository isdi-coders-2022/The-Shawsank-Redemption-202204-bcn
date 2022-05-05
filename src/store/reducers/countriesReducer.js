import {
  decreaseNumberType,
  increaseNumberType,
  loadCountriesType,
  loadMyCountriesType,
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
    default:
      newData = { ...state };
  }
  return newData;
};

export default countriesReducer;
