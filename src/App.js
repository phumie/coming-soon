import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import HeaderLogo from "./assets/images/phumie-logo-white.png";

const particleOpt = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="fullscreen">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
