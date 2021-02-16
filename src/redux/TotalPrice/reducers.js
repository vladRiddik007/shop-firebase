import types from "./types";

const INITIAL_STATE = {
  totalPrice: 0,
};

const totalPriceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_TOTAL_PRICE_SUCCESS:
      return {
        ...state,
        totalPrice: action.payload
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default totalPriceReducer;
