import types from "./types";

export const totalPriceChange = (data) => (dispatch) => {
  dispatch(totalPriceSuccess(data));
};

export const totalPriceStarted = () => {
  return {
    type: types.CHANGE_TOTAL_PRICE_START,
  };
};
export const totalPriceSuccess = (payload) => {
  return {
    type: types.CHANGE_TOTAL_PRICE_SUCCESS,
    payload,
  };
};

export const totalPriceError = (message) => {
  return {
    type: types.CHANGE_TOTAL_PRICE_ERROR,
    message,
  };
};
