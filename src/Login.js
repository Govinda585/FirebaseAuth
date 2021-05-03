import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const nextPage = () => {
    history.push("/home");
  };
  const sendLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      nextPage();
    } catch (error) {
      NotificationManager.error(error.message, "", 5000);
    }
  };

  return (
    <div>
      <NotificationContainer />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={sendLogin} type="submit">
          Login
        </button>
        <p>
          Not a member?
          <span style={{ color: "blue", cursor: "pointer" }}>
            <Link to="/register"> Register now</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
