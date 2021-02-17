import { db } from "../../firebase";
import types from "./types";

export const productsGet = (data) => async (dispatch) => {
  dispatch(productsStarted());
  return await db
    .collection("products")
    .get()
    .then((data) => {
      const products = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(productsSuccess(products));
    })
    .catch((error) => {
      console.log("Error", error);
      dispatch(productsError());
    });
};

export const productsStarted = () => {
  return {
    type: types.GET_PRODUCTS_START,
  };
};
export const productsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export const productsError = () => {
  return {
    type: types.GET_PRODUCTS_ERROR,
  };
};
