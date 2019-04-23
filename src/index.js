import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, NavLink as Link, Route } from "react-router-dom";

import AsyncHomeComponent from "./async.home.component";
import AsyncAboutComponent from "./async.about.component";
import AsyncContactComponent from "./async.contact.component";

import "./styles.scss";

// import async.js
import("./async.js").then(data => {
  console.log(data);
});


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="menu">
            <Link exact to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/about" activeClassName="active">
              About
            </Link>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </div>

          <Switch>
            <Route exact path="/" component={AsyncHomeComponent} />
            <Route path="/about" component={AsyncAboutComponent} />
            {/* <Route path="/contact" component={ AsyncContactComponent } /> */}
            {/* 
            By default, ContactComponent receives props from Route which contains history, match and location. 
            If you need to pass custom props, use render prop instead of component prop of Route.
            */}
            <Route path="/contact" render={props => <AsyncContactComponent {...props} value="1" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// render inside `app-root` element
ReactDOM.render(<App />, document.getElementById("app-root"));
