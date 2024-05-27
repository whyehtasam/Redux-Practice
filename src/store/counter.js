import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
const initialCounterState = { counter: 0, isToggle: true };

// Create a slice for the counter. This automatically generates reducers and actions
const counterSlice = createSlice({
  name: "counter", // The name of the slice
  initialState: initialCounterState, // The initial state
  reducers: {
    // The reducer functions
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

// Export the generated actions for use in components
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
