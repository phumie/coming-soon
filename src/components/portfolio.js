import React, { Component } from "react";
import SideMenu from "./side-menu";
import TopMenu from "./top-menu";
import "../assets/styles/portfolio.css";
import { Carousel } from "react-bootstrap";
import Icon from "../assets/images/angular.png";

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <SideMenu />
        <TopMenu />

        {/* <p className="p-bottom">PORTFOLIO</p> */}
        {/* <p className="p-top">PORTFOLIO</p> */}
        <div className="portfolio-content">
          <Carousel className="center-content">
            <Carousel.Item>
              <div>
                <h4>React</h4>
                <p>gvgfdtgnprpbg</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div>
                <h4>Angular</h4>
                <p>
                  fovbgfdbohgboghdfvldblndfl rdnvflvndfblndglbdfnblgfnb
                  dflbnrfbtgnnglbngtbngtl bfgnbfln
                </p>
                <img src={Icon} />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div>
                <h4>Java</h4>
                <p>dgvnftgbpnbfbn</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div>
                <h4>Android</h4>
                <p>dgvnftgbpnbfbn</p>
              </div>
            </Carousel.Item>
          </Carousel>
          {/* <a href="#" className="a-left">
            <i class="material-icons">navigate_before</i>
          </a>
          <div className="center-content">
            <h4>REACT</h4>
          </div>
          <a href="#" className="a-right">
            <i class="material-icons">navigate_next</i>
          </a> */}
        </div>
      </div>
    );
  }
}

export default Portfolio;
