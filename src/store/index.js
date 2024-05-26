import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, isToggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   // eslint-disable-next-line default-case
//   switch (action.type) {
//     case "increment": {
//       return { counter: state.counter + 1, isToggle: state.isToggle };
//     }
//     case "incrementByFive": {
//       return {
//         counter: state.counter + action.payload.value,
//         isToggle: state.isToggle,
//       };
//     }
//     case "decrement": {
//       return { counter: state.counter - 1, isToggle: state.isToggle };
//     }
//     case "toggle": {
//       return { isToggle: !state.isToggle, counter: state.counter };
//     }
//     case "reset": {
//       return {
//         counter: 0,
//         isToggle: state.isToggle,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
