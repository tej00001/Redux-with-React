import { legacy_createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decerement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  // if(action.type === 'DECREMENTBY2'){
  //     return {
  //         counter:state.counter - 2
  //     }
  // }
  if (action.type === "INCREMENTBY5") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENTBY5") {
    return {
      counter: state.counter - 5,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = legacy_createStore(counter);
// const CounterSubscriber=()=>{
//     const Lateststate=store.getState();
//     console.log(Lateststate)
//  }
//  store.subscribe(CounterSubscriber);
//  store.dispatch({type : "INCREMENTBY2 "});

export default store;
