import React from "react";
import { auth } from "./Firebase";
import { useHistory } from "react-router-dom";

function Home({ user }) {
  const name = user.displayName;
  const email = user.email;
  const history = useHistory();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome To the Home Page</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <button
        onClick={() => {
          auth.signOut();
          history.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
