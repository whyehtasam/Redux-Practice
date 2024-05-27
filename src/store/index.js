// Import the necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

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
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// Export the store for use in the Provider
export default store;
