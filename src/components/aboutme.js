import React, { Component } from "react";
import "../assets/styles/aboutme.css";
import { Row, Col } from "react-bootstrap";
import profile from "../assets/images/phumie-avatar.png";
import HeaderLogo from "../assets/images/ phumie-logo-black.png";
import SideMenu from "./side-menu";
import TopMenu from "./top-menu";

class About extends React.Component {
  render() {
    return (
      <div class="about">
        <SideMenu />
        <TopMenu />
        <img src={HeaderLogo} className="about-logo" />
        <div className="about-content">
          <Row>
            <Col>
              <div className="avatar-content">
                <div className="static-div">
                  <img src={profile} className="avatar-img" />
                  <h5>Hey, I'm Phumie.</h5>
                  <p>
                    I am a self-taught programmer with a passion for design and
                    all things beautiful. I specialize in web and app
                    development, frontend development and UI/UX designing. If
                    I'm not developing or designing, I am slaying dragons and
                    painting the town red.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
