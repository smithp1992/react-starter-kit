import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Declare routes
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    );
  }
}
