import React, { Component } from "react";
import { Layout, Navigation, Header } from "react-mdl";
import HeaderLogo from "../assets/images/ phumie-logo-black.png";
import resume from "../assets/documents/resume_example.pdf";
import "../assets/styles/menu.css";

class TopMenu extends Component {
  render() {
    return (
      <div className="header-nav">
        <img className="title-img" src={HeaderLogo} />
        <nav>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" exact href="/">
                Home
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="/about">
                About
              </a>
            </li> */}
            <li>
              <a className="smoothscroll" href={resume} target="_blank">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/portfolio">
                Porfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopMenu;
