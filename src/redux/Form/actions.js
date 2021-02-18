import { db } from "../../firebase";
import types from "./types";

export const postForm = (form) => async (dispatch) => {
  // console.log(JSON.stringify(form, 0, 2));
  dispatch(postFormStarted());
  return await db.collection("orders")
    .doc(`order-${Math.random()}`)
    .set({ ...form })
    .then(() => {
      console.log("Document successfully written!");
      dispatch(postFormSuccess(form));
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      dispatch(postFormError());
    });
};

export const postFormStarted = () => {
  return {
    type: types.POST_FORM_START,
  };
};
export const postFormSuccess = (payload) => {
  return {
    type: types.POST_FORM_SUCCESS,
    payload,
  };
};

export const postFormError = () => {
  return {
    type: types.POST_FORM_ERROR,
  };
};
