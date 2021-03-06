import types from "./types";

const INITIAL_STATE = {
  loading: false,
  error: false,
  productsRedux: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case types.GET_PRODUCTS_START:
      newState.loading = true;
      break;
    case types.GET_PRODUCTS_SUCCESS:
      newState.loading = false;
      newState.productsRedux = action.payload;
      break;
    case types.GET_PRODUCTS_ERROR:
      newState.loading = false;
      newState.error = true;
      break;
    default: {
      break;
    }
  }
  return newState;
};

export default productsReducer;
