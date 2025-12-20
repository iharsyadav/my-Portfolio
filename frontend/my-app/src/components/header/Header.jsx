import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "../header/header.css"
import { FaInstagram, FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar  className="social-navbar" >
          <Container fluid className="justify-content-end">
            <Nav className="social-nav">
        <Nav.Link href="">
          {" "}
          <FaInstagram size={20}  />
        </Nav.Link>
        <Nav.Link href="#">
          {" "}
          <FaLinkedinIn size={20} />
        </Nav.Link>
        <Nav.Link href="https://github.com/iharsyadav">
          {" "}
          <FaGithub  size={20} />
        </Nav.Link>
        <Nav.Link href="#">
          {" "}
          <FaFileAlt size={20}  />
        </Nav.Link>
      </Nav>

          </Container>
      
    </Navbar>
  );
};

export default Header;
