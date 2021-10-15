import * as React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "../components/public/Header.js";
import Main from "../components/public/Main.js";
import SideBarOne from "../components/public/SideBarOne.js";
import SideBarTwo from "../components/public/SideBarTwo.js";
import Toolbar from "../components/public/Toolbar.js";
import Footer from "../components/public/Footer.js";
import Profile from "../components/public/Profile.js";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

const Head = () => {
  return <Headers />;
};

const App = () => {
  return (
    <main role="main">
      <Main />
      <Profile />
      <SideBarOne />
      <SideBarTwo />
      <Toolbar />
      <Footer />
    </main>
  );
};

ReactDOM.render(
  <StrictMode>
    <Head />
    <App />
  </StrictMode>,
  document.getElementById("container")
);
