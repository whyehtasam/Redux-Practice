// Import the necessary functions from Redux Toolkit
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Define the initial state of the counter
const initialState = { counter: 0, isToggle: true };

// Create a slice for the counter. This automatically generates reducers and actions
const counterSlice = createSlice({
  name: "counter", // The name of the slice
  initialState, // The initial state
  reducers: { // The reducer functions
    increment(state) {
      // Increment the counter
      state.counter++;
    },
    decrement(state) {
      // Decrement the counter
      state.counter--;
    },
    incrementByFive(state, action) {
      // Increment the counter by the payload value
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      // Toggle the isToggle value
      state.isToggle = !state.isToggle;
    },
    reset(state) {
      // Reset the counter
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

// Create a Redux store with the counter reducer
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Export the generated actions for use in components
export const counterActions = counterSlice.actions;

// Export the store for use in the Provider
export default store;
