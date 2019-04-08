import React, { Component } from "react";
import SideMenu from "./side-menu";
import TopMenu from "./top-menu";
import "../assets/styles/resume.css";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <SideMenu />
        <TopMenu />
        <div className="resume-content">
          <p>RESUME</p>
        </div>
      </div>
    );
  }
}

export default Resume;
