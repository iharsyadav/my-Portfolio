import React from "react";
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
import "../hero/hero.css";
const Hero = () => {
  return (
    <>
      <Container style={{marginTop:"5rem"}} className="text-center my-5">
        <div className="profile-wrapper">
          <img
            src="/images/profile.png"
            alt="profile.png"
            className="profile-image"
          />
          <h2>Harsh Yadav</h2>
          <p className="text-muted">I'm a Front-End Developer</p>
        </div>
      </Container>

    </>
  );
};

export default Hero;
