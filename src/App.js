import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
