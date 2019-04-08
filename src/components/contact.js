import React, { Component } from "react";
import SideMenu from "./side-menu";
import TopMenu from "./top-menu";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../assets/styles/contact.css";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <SideMenu />
        <TopMenu />
        <div className="contact-div">
          <h3>
            Dont' be a stranger,
            <br />
            say hello.
          </h3>
          <Row>
            <Col>
              <p>
                Want to talk? Feel free to contact me. I am open to discussing
                opportunities to be a part of and to grow your ideas.
              </p>
              <br />
              <i class="fas fa-envelope" />
              <p>phumie.nevhutala@gmail.com</p>
              <i class="fas fa-phone" />
              <p>+27 (81) 778 9580</p>
              <div className="social-links">
                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/phumudzo-nevhutala-152168b8/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/phumie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github" />
                </a>

                {/* Twitter */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-twitter" />
                </a>
              </div>
            </Col>
            <Col>
              <Form>
                <p>
                  <b>Or message me directly.</b>
                </p>
                <Form.Group>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                  <Form.Control as="textarea" rows="4" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit" size="sm">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
