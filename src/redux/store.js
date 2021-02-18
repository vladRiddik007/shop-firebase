import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import basketReducer from "./Basket/reducers";
import productsReducer from "./Products/reducers";
import formReducer from "./Form/reducers";

const rootReducer = combineReducers({
  basketReducer,
  productsReducer,
  formReducer,
});

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
