import types from "./types";

const INITIAL_STATE = {
  loading: false,
  error: false,
  productsRedux: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productsRedux: action.payload,
      };
    case types.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default productsReducer;
