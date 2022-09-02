import { combineReducers, createStore } from "redux";
import trackerReducer from "./trackerReducer";

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

const rootReducer = combineReducers({
  cash: trackerReducer,
});

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
