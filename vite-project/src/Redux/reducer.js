import { ADD_COUNTER } from "./actionTypes";

export const CounterReducer = (store, action) => {
  switch (action.type) {
    case ADD_COUNTER: {
      return { ...store, counter: store.counter + action.payload };
    }

    case "ADD_TODO":{
      return{...store, todo: [...store.todo,action.payload]}
    }

    default: 
    return store;
  }
};
