import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Icon from "./../assets/images/phumie_drawing_high.png";
import HeaderLogo from "../assets/images/ phumie-logo-black.png";
import Particles from "react-particles-js";
import SideMenu from "./side-menu";
import TopMenu from "./top-menu";
import "../assets/styles/home.css";
import { Scrambler, Cycler } from "react-text-scrambler";
import ScrollIntoView from "react-scroll-into-view";

const particleOpt = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 3
    },
    color: {
      value: "#0000ff"
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#c8c8c8",
      opacity: 0.4,
      width: 1
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

class Landing extends Component {
  render() {
    return (
      <div id="home">
        <SideMenu />
        <TopMenu />
        <div
          className="header-content"
          style={{ width: "100%", margin: "auto" }}
        >
          <Grid className="landing-grid">
            <Cell col={12}>
              <img src={Icon} className="avatar" />
              <img src={HeaderLogo} className="header-logo" />
              <div className="banner-text">
                <Scrambler text="DEVELOPER & UI/UX DESIGNER" />
              </div>
            </Cell>
          </Grid>

          <ScrollIntoView selector="#aboutme" smooth="true">
            <i class="scroll-down" />
          </ScrollIntoView>

          <div id="aboutme">
            Content about me here.
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
