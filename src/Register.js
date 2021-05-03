import React, { useState } from "react";
import { auth } from "./Firebase";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const nextPage = () => {
    history.push("/home");
  };
  const sendRegister = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter name!");
    }

    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      result.user.updateProfile({
        displayName: name,
      });

      NotificationManager.success(
        "Register Successfully",
        "",
        2900,
        setTimeout(() => {
          nextPage();
        }, 3000)
      );
    } catch (error) {
      NotificationManager.error(error.message, "", 8000);
    }
  };
  return (
    <div>
      <NotificationContainer />
      <h1>Register here</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={sendRegister}>Register</button>
      </form>
    </div>
  );
}

export default Register;
