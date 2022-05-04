import actionTypes from "../actions/ActionTypes";

const countriesReducer = (state, action) => {
  let newData;

  switch (action.type) {
    case actionTypes.increaseNumber:
      state.page === 25
        ? (newData = { ...state })
        : (newData = { ...state, page: state.page + 1 });
      break;
    case actionTypes.decreaseNumber:
      state.page === 0
        ? (newData = { ...state })
        : (newData = { ...state, page: state.page - 1 });
      break;
    case actionTypes.loadCountries:
      newData = { ...state, countries: action.payload, loaded: true };
      break;

    case actionTypes.addCountry:
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
