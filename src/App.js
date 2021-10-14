import * as React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";

const App = () => {
  return (
    <header>
      {" "}
      <div>
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/services" exact component={Services} />
            <Route path="/services/services1" exact component={ServicesOne} />
            <Route path="/services/services2" exact component={ServicesTwo} />
            <Route path="/services/services3" exact component={ServicesThree} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/events" exact component={Events} />
            <Route path="/events/events1" exact component={EventsOne} />
            <Route path="/events/events2" exact component={EventsTwo} />
            <Route path="/support" exact component={Support} />
          </Switch>
        </Router>
      </div>
    </header>
  );
};
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li> Sportsbook</li>
        <li> Shopping</li>
        <li> My Page</li>
      </ul>
    </nav>
  );
};
const Main = () => {
  return (
    <main role="main">
      <div className="profile"> profile pic </div>
      <aside className="sidebar-1">
        <h3> Sidebar 1</h3>
        <blockquote>Daily Posts</blockquote>
      </aside>

      <section>
        <article>Body </article>
      </section>
      <nav>
        <ul>
          <li>Tool Bar</li>
          <li>Tool Bar-1</li>
          <li>Tool Bar-2</li>
        </ul>
      </nav>
      <aside className="sidebar-2">
        <h3> Sidebar 2</h3>
        <blockquote>Weekly Posts</blockquote>
      </aside>
      {/* <Grid container style={{width: '90%', margin: '0 auto'}}>
      <Grid item xs={12}>
        <Paper style={{height: 100, margin: 10}}></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{height: 100, margin: 10}}></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{height: 100, margin: 10}}></Paper>
      </Grid>
    </Grid> */}
    </main>
  );
};

const Footer = () => {
  let data = [1, 2, 3, 4];
  return (
    <footer>
      <h1>
        {" "}
        <p> This is the number: ${data[0]} </p>
      </h1>
    </footer>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
    <Nav />
    <Main />

    <Footer />
  </StrictMode>,
  document.getElementById("container")
);
