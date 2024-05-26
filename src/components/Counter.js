import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  //used for redux to extract state from the store
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.isToggle);

  // used in redux and handles the dispatching of actions to the store
  const dispatch = useDispatch();


  // used for redux toolkit to dispatch actions methods 
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const incrementCounterHandler2 = () => {
    dispatch(counterActions.incrementByFive(5));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetCounterHandler = () => {
    dispatch(counterActions.reset());
  };

    // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  // const incrementCounterHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const incrementCounterHandler2 = () => {
  //   dispatch({ type: "incrementByFive", payload: { value: 5 } });
  // };

  // const decrementCounterHandler = () => {
  //   dispatch({ type: "decrement" });
  // };
  // const resetCounterHandler = () => {
  //   dispatch({ type: "reset" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{toggle && counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={incrementCounterHandler2}>Increment by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetCounterHandler}>Reset</button>
    </main>
  );
};

export default Counter;
