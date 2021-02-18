import { totalPrice } from "../../utils/totalPrice";
import types from "./types";

const INITIAL_STATE = {
  totalPrice: 0,
  selectedProducts: [],
};

const basketReducer = (state = INITIAL_STATE, action) => {
  let newState = [...state.selectedProducts];
  const productIndex = newState.findIndex(
    (product) => product.id === action.id
  );
  switch (action.type) {
    case types.ADD_PRODUCT:
      newState = [...newState, action.product];
      break;
    case types.DELETE_PRODUCT:
      newState = newState.filter((product) => product.id !== action.id);
      break;
    case types.INCREASE_QUANTITY:
      newState[productIndex].quantity += 1;
      break;
    case types.DECREASE_QUANTITY:
      newState[productIndex].quantity -= 1;
      if (newState[productIndex].quantity === 0) {
        newState = newState.filter((product) => product.id !== action.id);
      }
      break;
    default: {
      break;
    }
  }
  return {
    ...state,
    totalPrice: totalPrice(newState),
    selectedProducts: [...newState],
  };
};

export default basketReducer;
