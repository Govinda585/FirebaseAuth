import React, { useState, useEffect } from "react";
import "./App.css";
import "react-notifications/lib/notifications.css";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { auth } from "./Firebase";

function App() {
  const [user, setUser] = useState("null");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const result = user ? setUser(user) : "You are not logged in";
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Learning firebase</h1>

        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
