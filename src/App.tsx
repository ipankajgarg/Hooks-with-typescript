import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreateBlog } from "./components/CreateBlog";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
