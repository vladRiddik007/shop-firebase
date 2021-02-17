import types from "./types";

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};
export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};
export const increaseQuantity = (id) => {
  return {
    type: types.INCREASE_QUANTITY,
    id,
  };
};
export const decreaseQuantity = (id) => {
  return {
    type: types.DECREASE_QUANTITY,
    id,
  };
};
