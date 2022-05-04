import actionTypes from "../actions/ActionTypes";

const actualPageReducer = (state, action) => {
  let newPage;

  switch (action.type) {
    case actionTypes.increaseNumber:
      state.page === 25
        ? (newPage = { ...state })
        : (newPage = { ...state, page: state.page + 1 });
      break;
    case actionTypes.decreaseNumber:
      state.page === 0
        ? (newPage = { ...state })
        : (newPage = { ...state, page: state.page - 1 });
      break;

    default:
      newPage = { ...state };
  }
  return newPage;
};

export default actualPageReducer;
