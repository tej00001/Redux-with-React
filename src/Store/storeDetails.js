import { useReducer } from "react";
import { createStore } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decerement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "INCREMENTBY2") {
//     return {
//       counter: state.counter + 2,
//     };
//   }

//   if (action.type === "DECREMENTBY2") {
//     return {
//       counter: state.counter - 2,
//     };
//   }
//   if (action.type === "INCREMENTBY5") {
//     return {
//       counter: state.counter + 5,
//     };
//   }

//   if (action.type === "DECREMENTBY5") {
//     return {
//       counter: state.counter - 5,
//     };
//   }
//   return state;
// };

// const store = legacy_createStore(counterReducer);
// const CounterSubscriber=()=>{
//     const Lateststate=store.getState();
//     console.log(Lateststate)
//  }
//  store.subscribe(CounterSubscriber);
//  store.dispatch({type : "INCREMENTBY2 "});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
