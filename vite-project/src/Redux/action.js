import { ADD_COUNTER } from "./actionTypes";

export const addCount = (data) => {
  return {
    type: ADD_COUNTER,
    payload: data,
  };
};

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};
