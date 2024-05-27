import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
