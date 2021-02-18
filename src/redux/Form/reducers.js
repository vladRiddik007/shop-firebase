import types from "./types";

const INITIAL_STATE = {
  loading: false,
  error: false,
  form: {},
};

const formReducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case types.POST_FORM_START:
      newState.loading = true;
      break;
    case types.POST_FORM_SUCCESS:
      newState.loading = false;
      newState.form = action.payload;
      break;
    case types.POST_FORM_ERROR:
      newState.loading = false;
      newState.error = true;
      break;
    default: {
      break;
    }
  }
  return newState;
};

export default formReducer;
