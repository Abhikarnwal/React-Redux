import { legacy_createStore as createStore } from "redux";
import { CounterReducer } from "./reducer";

const initalStore = {
  counter: 0,
  todo: [],
};

export const store = createStore(CounterReducer, initalStore);

store.subscribe(() => {
  console.log("store", store.getState());
});
