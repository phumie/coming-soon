import React, { Component } from "react";
import { Layout, Navigation, Content, Drawer } from "react-mdl";
import HeaderLogo from "../assets/images/ phumie-logo-black.png";
import "../assets/styles/menu.css";

class SideMenu extends Component {
  render() {
    return (
      <div style={{ height: "100vh", float: "left" }}>
        <Layout className="side-menu">
          <Drawer>
            <Navigation>
              <a href="/">HOME</a>
              {/* <a href="/about">ABOUT</a> */}
              <a href="/resume">RESUME</a>
              <a href="/portfolio">PORTFOLIO</a>
              <a href="/contact">CONTACT</a>
            </Navigation>
          </Drawer>
          <Content>
            {/* <img className="side-img" src={HeaderLogo} /> */}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default SideMenu;
