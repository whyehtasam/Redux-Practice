import { createStore } from "redux";

const counterReducer = (state= { counter: 0 }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "increment": {
      return { counter: state.counter + 1 };
    }
    case "decrement": {
      return { counter: state.counter - 1 };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

// function counterSubscriber() {
//   const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

export default store;