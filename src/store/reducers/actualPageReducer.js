import actionTypes from "../actions/ActionTypes";

const actualPageReducer = (state, action) => {
  let newPage;

  switch (action.type) {
    case actionTypes.increaseNumber:
      newPage = { ...state, page: state.page + 1 };
      return newPage;
    case actionTypes.decreaseNumber:
      newPage = { ...state, page: state.page - 1 };
      return newPage;

    default:
      newPage = { ...state };
      return newPage;
  }
};

export default actualPageReducer;
